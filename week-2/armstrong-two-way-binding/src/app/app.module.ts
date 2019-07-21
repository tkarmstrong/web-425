/*
============================================
; Title:  Assignment 2.3 - Two-Way Binding
; Author: Tyler Armstrong
; Date:   21 Jul 2019
; Modified By: N/A
; Description: Angular Binding
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
