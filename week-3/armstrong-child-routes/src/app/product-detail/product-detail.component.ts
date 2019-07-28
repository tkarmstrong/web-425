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
  selector: 'app-product-detail',
  template: `
    <div class="container">
      <div class="card">
      <h5 class="card-header">IPhone XS</h5>
      <div class="card-body">
        <h5 class="card-title">Id: {{ productId }}</h5>
        <router-outlet></router-outlet>
        <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
      </div>
    </div>
  `,
  styles: [`
    .container { margin-top: 20px; }
  `]
})
export class ProductDetailComponent implements OnInit {
  productId: string;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
