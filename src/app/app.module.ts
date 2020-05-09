import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // (optional)
import { MaterialModule } from '@blox/material';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent, TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      // using FormsModule is optional
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
