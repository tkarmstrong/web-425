/*
============================================
; Title:  Assignment 1.5 - Modules
; Author: Tyler Armstrong
; Date:   14 Jul 2019
; Modified By: N/A
; Description: Angular Modules
;===========================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShippingComponent],
  exports: [ShippingComponent]
})
export class ShippingModule { }
