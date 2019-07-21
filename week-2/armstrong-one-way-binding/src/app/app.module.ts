/*
============================================
; Title:  Assignment 2.3 - One-Way Binding
; Author: Tyler Armstrong
; Date:   21 Jul 2019
; Modified By: N/A
; Description: Angular Binding
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
