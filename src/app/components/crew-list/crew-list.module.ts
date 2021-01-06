import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewListComponent } from './crew-list.component';
import { CrewListContainerComponent } from './crew-list.container.component';
import { CrewMemberComponent } from './crew-member/crew-member.component';

@NgModule({
  declarations: [CrewListComponent, CrewListContainerComponent, CrewMemberComponent],
  imports: [
    CommonModule
  ],
  exports: [CrewListComponent, CrewListContainerComponent, CrewMemberComponent]
})
export class CrewListModule { }
