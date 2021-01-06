import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../crew-list.types';

@Component({
  selector: 'app-crew-member',
  templateUrl: './crew-member.component.html',
  styleUrls: ['./crew-member.component.scss']
})
export class CrewMemberComponent implements OnInit {

  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
