import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderModule } from './components/page-header';
import { CrewListModule } from './components/crew-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PageHeaderModule,
    CrewListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
