/*
============================================
; Title:  Assignment 3.4 - Guarding Routes
; Author: Professor Krasso
; Date:   28 Jul 2019
; Modified By: Tyler Armstrong
; Description: Angular Guarding Routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Welcome!</h1>
          <p class="lead">Assignment 3.4 - Guarding Routes</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home { background-color: red; }
    .container { margin-top: 20px; }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
