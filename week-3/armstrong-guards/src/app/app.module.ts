/*
============================================
; Title:  Assignment 3.4 - Guarding Routes
; Author: Professor Krasso
; Date:   28 Jul 2019
; Modified By: Tyler Armstrong
; Description: Angular Guarding Routes
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { LoginGuard} from './login.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }, LoginGuard, UnsavedChangesGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
