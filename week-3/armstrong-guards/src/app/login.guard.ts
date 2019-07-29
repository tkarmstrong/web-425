/*
============================================
; Title:  Assignment 3.4 - Guarding Routes
; Author: Professor Krasso
; Date:   28 Jul 2019
; Modified By: Tyler Armstrong
; Description: Angular Guarding Routes
;===========================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    const loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert('You\'re not logged in and will be redirected to the Login page.');
      this.router.navigate(['/login']);
    }

    return loggedIn;
  }
}
