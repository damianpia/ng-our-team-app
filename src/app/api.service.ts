import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Member } from './components/crew-list';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getMembersList(): Observable<Array<Member>> {
    const url = `${this.baseUrl}/task/index.json`;
    return this.http.get(url, { observe: 'body', responseType: 'json' }).pipe(
      map((response: any) => response.data[0].attributes.memberCards), // any is not the best option here, I know :(.
      map((memberCards: any) => Object.values(memberCards) as Array<Member>),
      catchError((err: HttpErrorResponse) => {
        console.warn(`Error grabbing members data: ${err}`);
        return of(null); // I should pass an error to some kind of error handler.
      })
    );
  }
}
