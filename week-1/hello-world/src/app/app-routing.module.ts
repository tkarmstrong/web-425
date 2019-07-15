/*
============================================
; Title:  Assignment 1.3 - Angular CLI
; Author: Tyler Armstrong
; Date:   14 Jul 2019
; Modified By: N/A
; Description: First Angular CLI app
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
