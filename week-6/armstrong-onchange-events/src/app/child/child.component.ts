/*
============================================
; Title:  Exercise 6.4 - OnChange Events
; Author: Tyler Armstrong
; Date:   18 Aug 2019
; Modified By: N/A
; Description: Angular OnChange events.
;===========================================
*/

import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="childContainer">
      <div class="child">
        <h2 style="margin-top:0px;">Child</h2>
        <div>Greeting: {{ greeting }}</div>
        <div class="paddingTop">Username: {{ user.name }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      .childContainer {
        margin: 25px auto;
        width: 70%;
        border: 1px solid #333333;
      }
      .child {
        padding: 20px 50px;
      }
      .paddingTop {
        padding-top: 15px;
      }
    `
  ]
})
export class ChildComponent implements OnChanges {
  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  // ngOnInit() {}
}
