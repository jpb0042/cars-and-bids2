import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';

import { FirstCarComponent } from './first-car/first-car.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { SecondCarComponent } from './second-car/second-car.component';
import { ThirdCarComponent } from './third-car/third-car.component';
import { CarsLeftComponent } from './cars-left/cars-left.component';
import { Layout1Component } from './layout1/layout1.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FirstCarComponent,
    RightColumnComponent,
    SecondCarComponent,
    ThirdCarComponent,
    CarsLeftComponent,
    Layout1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
