/*
============================================
; Title:  Exercise 6.4 - OnChange Events
; Author: Tyler Armstrong
; Date:   18 Aug 2019
; Modified By: N/A
; Description: Angular OnChange events.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'armstrong-Onchange-events';

  myGreeting = 'Hello';
  myUser: { name: string} = {name: 'Tyler'}
}
