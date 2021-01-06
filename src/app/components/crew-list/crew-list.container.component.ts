import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Employee } from './crew-list.types';

@Component({
  selector: 'app-crew-list-container',
  template: `
  <app-crew-list
  [employees]="employeeList$ | async"></app-crew-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrewListContainerComponent implements OnInit {

  employeeList$: Observable<Array<Employee>>;

  constructor(
    private apiService: ApiService
  ) {
    this.employeeList$ = this.apiService.getEmployeesList();
  }

  ngOnInit() {
  }

}
