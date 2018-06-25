import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { COMP1Component } from './comp1/comp1.component';
import { COMP2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    COMP1Component,
    COMP2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
