import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

@NgModule({
  exports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MaterialModule,
  ],
})
export class SharedModule { }
