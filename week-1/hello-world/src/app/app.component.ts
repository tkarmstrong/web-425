/*
============================================
; Title:  Assignment 1.3 - Angular CLI
; Author: Tyler Armstrong
; Date:   14 Jul 2019
; Modified By: N/A
; Description: First Angular CLI app
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello World!';
}
