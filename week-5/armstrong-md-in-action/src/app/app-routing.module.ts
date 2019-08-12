/*
============================================
; Title:  Assignment 5.4 - Flex Layout
; Author: Tyler Armstrong
; Date:   11 Aug 2019
; Modified By: N/A
; Description: Angular Flex Layout
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
