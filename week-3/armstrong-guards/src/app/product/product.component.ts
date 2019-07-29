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
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  template: `
    <div class="container">
      <h1 class="alert alert-success" role="alert">Product Component</h1>\
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Name:</span>
          </div>
          <input type="text" class="form-control" placeholder="Enter your name" [formControl]="name">
        </div>
    </div>
  `,
  styles: [`
    .product { background-color: cyan; }
    .container { margin-top: 20px; }
  `]
})
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
