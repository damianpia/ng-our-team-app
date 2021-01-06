import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Member } from '.';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrewListComponent {
  @Input() members: Array<Member>;

  constructor() { }
}
