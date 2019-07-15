/*
============================================
; Title:  Assignment 1.5 - Modules
; Author: Tyler Armstrong
; Date:   14 Jul 2019
; Modified By: N/A
; Description: Angular Modules
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Welcome from Tyler's ShippingComponent
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
