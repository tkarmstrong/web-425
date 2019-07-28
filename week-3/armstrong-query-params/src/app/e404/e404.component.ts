/*
============================================
; Title:  Assignment 3.2 - Passing Data To Routes
; Author: Tyler Armstrong
; Date:   28 Jul 2019
; Modified By: N/A
; Description: Passing data using Angular Routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>Error 404: This page doesn't exist.</h2>
      </div>
    </div>
  `,
  styles: [`
    .container { margin-top: 20px; }
    h2 { color: crimson; }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
