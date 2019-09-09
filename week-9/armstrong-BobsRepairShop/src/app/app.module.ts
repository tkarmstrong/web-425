/*
============================================
; Title:  Assignment 9.3 - Bob's Computer Repair
; Author: Tyler Armstrong
; Date:   08 Sep 2019
; Modified By: N/A
; Description: First app built in Angular.
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';


// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InvoiceDialogComponent } from './pages/invoice-dialog/invoice-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [InvoiceDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
