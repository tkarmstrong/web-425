/*
============================================
; Title:  Assignment 1.5 - Modules
; Author: Tyler Armstrong
; Date:   14 Jul 2019
; Modified By: N/A
; Description: Angular Modules
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShippingModule } from "./shipping/shipping.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
