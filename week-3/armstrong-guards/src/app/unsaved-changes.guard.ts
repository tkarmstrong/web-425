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
import { CanDeactivate } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      return window.confirm('You have unsaved changes. Still want to leave?');
    } else {
      return true;
    }
  }
}
