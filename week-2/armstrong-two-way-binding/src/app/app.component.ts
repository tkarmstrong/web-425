/*
============================================
; Title:  Assignment 2.3 - Two-Way Binding
; Author: Tyler Armstrong
; Date:   21 Jul 2019
; Modified By: N/A
; Description: Angular Two-Way Binding
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Two-Way Binding</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <br /><br /><br />

    <div class="container-fluid two-way-form">
      <h2>Two-Way Binding Example</h2><br />
      <div class="form-group">
        <input class="form-control" type="text"
          placeholder="Enter your name ..."
          [(ngModel)]="name">

        <button class="btn btn-outline-primary form-control mt-2" (click)="name=''">Clear Name</button>
      </div>

      <div class="form-group">
        <p class="alert-success">Welcome to two way binding, {{name}}!</p>
      </div>

    </div>
  `,
  styles: [`
    .two-way-form {
      width: 50%;
    }
  `]
})
export class AppComponent {
  title = 'armstrong-two-way-binding';

  name = '';
}
