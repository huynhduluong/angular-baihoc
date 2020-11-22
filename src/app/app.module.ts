import { DirectivesModule } from './directives/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HomeModule } from './home/home.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { Baitap3Module } from './baitap3/baitap3.module';
import { Baitap4Module } from './baitap4/baitap4.module';
//NgModule: meta-data
@NgModule({
  //declarations: nơi khai báo các component được module quản lý
  //=> AppComponent đang được AppModule quản lý
  //Component không thể đứng 1 mình, nó phải được 1 module quản lý
  // 1 component chỉ được nằm trong declarations của 1 module
  declarations: [
    AppComponent,
    DemoComponent
  ],
  //imports : nơi khai báo các module
  //HomeModule: HeaderComponent, FootComponent, ContentComponent
  //đẻ sử dụng được các component trong HomeModule trong AppModule 
  //Cần phải imports: [HomeModule]
  //2 loại module: 
  //Module do angular cung cấp: RouterModule, HttpClientModule
  //Module do dev định nghĩa: HomeModule
  imports: [
    BrowserModule, HomeModule, Baitap2Module, DataBindingModule, Baitap3Module, Baitap4Module, DirectivesModule
  ],
  //providers: nơi khai báo các service
  providers: [],
  //bootstrap: khai báo AppComponent là component chạy đầu tiên
  bootstrap: [AppComponent]
})
export class AppModule { }
