/*
============================================
; Title:  Assignment 6.3 - Output Properties
; Author: Tyler Armstrong
; Date:   18 Aug 2019
; Modified By: N/A
; Description: Angular output properties
;===========================================
*/

import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice-quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'armstrong-Output-Properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
