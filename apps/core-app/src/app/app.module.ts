import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentAModule } from '@angular-communication/component-a';
import { ComponentBModule } from '@angular-communication/component-b';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentAModule, ComponentBModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
