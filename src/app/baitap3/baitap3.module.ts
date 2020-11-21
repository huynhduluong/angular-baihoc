import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap3Component } from './baitap3.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [Baitap3Component, HeaderComponent, SliderComponent, ProductComponent, ProductListComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [Baitap3Component]
})
export class Baitap3Module { }
