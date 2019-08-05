/*
============================================
; Title:  Assignment 4.2 - Inversion Control & Dependency Injection
; Author: Tyler Armstrong
; Date:   04 Aug 2019
; Modified By: N/A
; Description: Dependency Injection
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
