/*
============================================
; Title:  Exercise 6.2 - Input properties
; Author: Tyler Armstrong
; Date:   18 Aug 2019
; Modified By: N/A
; Description: Angular input properties.
;===========================================
*/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <h4 *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</h4>
  `,
  styles: []
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
