/*
============================================
; Title:  Assignment 2.4 - Routing in Action
; Author: Tyler Armstrong
; Date:   21 Jul 2019
; Modified By: N/A
; Description: Angular Routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>This is the Home Page.</h2>
      </div>
    </div>
`,
styles: [`
    .container { margin-top: 20px; }
    h2 { color:  teal; }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
