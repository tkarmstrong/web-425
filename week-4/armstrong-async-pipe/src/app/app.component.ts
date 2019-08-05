/*
============================================
; Title:  Assignment 4.4 - Async Pipe
; Author: Tyler Armstrong
; Date:   04 Aug 2019
; Modified By: N/A
; Description: Async Pipe
;===========================================
*/

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FruitService } from './fruit.service';
import { Fruit } from './fruit';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
          </ul>
        </nav>
    <br /><br />
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Fruits Table</h2>
            <table class="table table-striped table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price Per Pound</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let fruit of fruit | async">
                  <th scope="row">{{ fruit.id }}</th>
                  <td>{{ fruit.name }}</td>
                  <td>$ {{ fruit.pricePerPound }}</td>
                  <td>{{ fruit.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  `,
  styles: [``]
})
export class AppComponent {

  fruit: Observable<Fruit[]>;
  title = 'app';

  constructor(private fruitService: FruitService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.fruit = this.fruitService.getFruit();
  }

}
