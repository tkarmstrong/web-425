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
import { MatDialog } from '@angular/material';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  costs = {
    passwordReset: 0,
    spywareRemoval: 0,
    ramUpgrade: 0,
    softwareInstallation: 0,
    tuneup: 0,
    keyboardCleaning: 0,
    discCleanup: 0,
    parts: 0,
    labor: 0,
    total: 0,
    date: ''
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  onSubmit(costValues) {
    if (costValues.passwordReset) {
      this.costs.passwordReset = 39.99;
    }
    if (costValues.spywareRemoval) {
      this.costs.spywareRemoval = 99.99;
    }
    if (costValues.ramUpgrade) {
      this.costs.ramUpgrade = 129.99;
    }
    if (costValues.softwareInstallation) {
      this.costs.softwareInstallation = 49.99;
    }
    if (costValues.tuneup) {
      this.costs.tuneup = 89.99;
    }
    if (costValues.keyboardCleaning) {
      this.costs.keyboardCleaning = 45;
    }
    if (costValues.discCleanup) {
      this.costs.discCleanup = 149.99;
    }
    this.costs.labor = costValues.labor * 50;
    this.costs.parts = costValues.parts;

    let sum = 0;
    // tslint:disable-next-line: forin
    for (const key in this.costs) {
      sum += this.costs[key];
    }
    this.costs.total = sum;
    this.costs.date = new Date().toLocaleDateString('en-US');
    this.openInvoiceDialog();
  }

  openInvoiceDialog() {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      width: '80%',
      data: this.costs,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      // result returns the costs object
      // TO DO: reset form using the result dataset vs. reloading the page
      location.reload();
    });
  }

}
