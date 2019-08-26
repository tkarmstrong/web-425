/*
============================================
; Title:  Exercise 7.3 - Form Validation
; Author: Tyler Armstrong
; Date:   25 Aug 2019
; Modified By: N/A
; Description: Angular form validation.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'armstrong-form-validation';

  onSubmit(formData) {
    console.log(formData);
  }
}
