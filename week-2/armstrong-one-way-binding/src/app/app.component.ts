import { Component } from '@angular/core';

/*
============================================
; Title:  Assignment 2.3 - One-Way Binding
; Author: Tyler Armstrong
; Date:   21 Jul 2019
; Modified By: N/A
; Description: Angular Binding
;===========================================
*/

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  title = 'armstrong-one-way-binding';

  // class property
  name:string = "Tyler Armstrong";

  // change name function
  changeName(){
    this.name = "Call sign: T-Bone";
  }
}
