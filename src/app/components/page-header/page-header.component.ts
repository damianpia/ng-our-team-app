import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  @Input()
  set pageTitle(title: string) {
    this.titleService.setTitle(title);
    this._title = title;
  }
  get pageTitle(): string {
    return this._title;
  }

  private _title: string;

  constructor(private readonly titleService: Title) { }


}
