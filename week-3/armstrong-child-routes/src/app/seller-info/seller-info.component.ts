/*
============================================
; Title:  Assignment 3.3 - Child Routes
; Author: Professor Krasso
; Date:   28 Jul 2019
; Modified By: Tyler Armstrong
; Description: Angular Child Routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>The seller is Apple, Id: {{ sellerID }}</p>
  `,
  styles: [`
    .container { margin-top: 20px;}
    :host { background: yellow; }
  `]
})
export class SellerInfoComponent implements OnInit {
  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
