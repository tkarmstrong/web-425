/*
============================================
; Title:  Exercise 6.2 - Input properties
; Author: Tyler Armstrong
; Date:   18 Aug 2019
; Modified By: N/A
; Description: Angular input properties.
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Armstrong Input Properties';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
