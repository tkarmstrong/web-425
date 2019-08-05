/*
============================================
; Title:  Assignment 4.2 - Inversion Control & Dependency Injection
; Author: Tyler Armstrong
; Date:   04 Aug 2019
; Modified By: N/A
; Description: Dependency Injection
;===========================================
*/

import { Injectable } from '@angular/core';
import {Fruit} from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(0, 'Strawberry', 'red');
  }
  constructor() { }
}
