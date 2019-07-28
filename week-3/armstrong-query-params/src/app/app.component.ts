/*
============================================
; Title:  Assignment 3.2 - Passing Data To Routes
; Author: Tyler Armstrong
; Date:   28 Jul 2019
; Modified By: N/A
; Description: Passing data using Angular Routes
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'armstrong-query-params';
  userId = 1098;
}
