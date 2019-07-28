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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>Dashboard for user: {{ userId }}</h2>
      </div>
    </div>
  `,
  styles: [`
    .container { margin-top: 20px; }
    h2 { color: midnightblue; }
  `]
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
