/*
============================================
; Title:  Exercise 7.1 - Template Forms
; Author: Tyler Armstrong
; Date:   25 Aug 2019
; Modified By: N/A
; Description: Angular template forms.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'armstrong-template-forms';

  onSubmit(formData) {
    console.log(formData);
  }
}
