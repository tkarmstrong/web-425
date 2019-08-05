/*
============================================
; Title:  Assignment 4.4 - Async Pipe
; Author: Tyler Armstrong
; Date:   04 Aug 2019
; Modified By: N/A
; Description: Async Pipe
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: 'Mango', pricePerPound: '0.50', quantity: 300},
    {id: 2, name: 'Apple', pricePerPound: '0.65', quantity: 62},
    {id: 3, name: 'Black Berry', pricePerPound: '1.36', quantity: 127},
    {id: 4, name: 'Grape', pricePerPound: '0.89', quantity: 965},
    {id: 5, name: 'Raspberry', pricePerPound: '2.00', quantity: 999}
  ];

  constructor() { }

    getFruit(): Observable<Fruit[]> {
      return of(this.fruits);
    }
}
