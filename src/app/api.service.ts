import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Employee } from './components/crew-list';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getEmployeesList(): Observable<Array<Employee>> {
    const url = `${this.baseUrl}/task/index.json`;
    return this.http.get(url, { observe: 'body', responseType: 'json' }).pipe(
      map((response: any) => response.data[0].attributes.memberCards as Array<Employee>), // any is not the best option here
      catchError((err: HttpErrorResponse) => {
        console.warn(`Error grabbing employees data: ${err}`);
        return of(null);
      })
    );
  }
}
