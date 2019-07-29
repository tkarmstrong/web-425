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
  selector: 'app-login',
  template: `
    <div class="container">
      <h1 class="alert alert-danger">Please log in to see product page.</h1>
    </div>
  `,
  styles: [`
    .container { margin-top: 20px; }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
