/*
============================================
; Title:  Assignment 1.5 - Modules
; Author: Tyler Armstrong
; Date:   14 Jul 2019
; Modified By: N/A
; Description: Angular Modules
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome from Tyler's AppComponent</h1>
    <app-shipping></app-shipping>
  `,
  styles: []
})
export class AppComponent {
  title = 'hello-modules';
}
