/*
============================================
; Title:  Assignment 4.2 - Inversion Control & Dependency Injection
; Author: Tyler Armstrong
; Date:   04 Aug 2019
; Modified By: N/A
; Description: Dependency Injection
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-fruit',
  template: `
    <div class="mt-4 container">
      <div class="row">
        <h2>Fruit Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .tbl-header {
      background-color: steelblue;
      color: white;
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {
  fruit: Fruit;

  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
   }

  ngOnInit() {
  }

}
