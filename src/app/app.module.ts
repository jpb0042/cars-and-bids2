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
import { SecondNavBarComponent } from './second-nav-bar/second-nav-bar.component';
import { SellACarComponent } from './sell-a-car/sell-a-car.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoGuideComponent } from './photo-guide/photo-guide.component';
import { MerchPageComponent } from './merch-page/merch-page.component';
import { SupportPageComponent } from './support-page/support-page.component';

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
    SecondNavBarComponent,
    SellACarComponent,
    InformationComponent,
    FooterComponent,
    PhotoGuideComponent,
    MerchPageComponent,
    SupportPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
