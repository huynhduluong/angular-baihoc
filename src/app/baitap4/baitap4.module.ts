import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';

@NgModule({
  declarations: [Baitap4Component],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [Baitap4Component]
})
export class Baitap4Module { }
