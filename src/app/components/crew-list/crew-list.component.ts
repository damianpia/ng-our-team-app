import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Employee } from '.';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrewListComponent {
  @Input() employees: Array<Employee>;

  constructor() { }
}
