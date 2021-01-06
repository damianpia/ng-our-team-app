import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Member } from './crew-list.types';

@Component({
  selector: 'app-crew-list-container',
  template: `
  <app-crew-list
  [members]="memberList$ | async"></app-crew-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrewListContainerComponent implements OnInit {

  memberList$: Observable<Array<Member>>;

  constructor(
    private apiService: ApiService
  ) {
    this.memberList$ = this.apiService.getMembersList();
  }

  ngOnInit() {
  }

}
