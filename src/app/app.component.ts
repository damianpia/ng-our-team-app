import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from './api.service';
import { Member } from './components/crew-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  pageTitle = 'Our team';
  constructor() { }
}
