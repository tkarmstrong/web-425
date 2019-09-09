/*
============================================
; Title:  Assignment 9.3 - Bob's Computer Repair
; Author: Tyler Armstrong
; Date:   08 Sep 2019
; Modified By: N/A
; Description: First app built in Angular.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
   ) { }

  ngOnInit() {
  }

}
