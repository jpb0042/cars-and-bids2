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
import { SellCarCarouselComponent } from './sell-car-carousel/sell-car-carousel.component';
import { RecentlySoldComponent } from './recently-sold/recently-sold.component';
import { RecentlySoldListComponent } from './recently-sold/recently-sold-list/recently-sold-list.component';
import { OurAuctionsCard1Component } from './our-auctions-card1/our-auctions-card1.component';
import { OurAuctionsCard2Component } from './our-auctions-card2/our-auctions-card2.component';
import { MerchComponent } from './merch/merch.component';
import { MerchReturnCardComponent } from './merch-return-card/merch-return-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';

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
    SellCarCarouselComponent,
    RecentlySoldComponent,
    RecentlySoldListComponent,
    OurAuctionsCard1Component,
    OurAuctionsCard2Component,
    MerchComponent,
    MerchReturnCardComponent,
    SideBarComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
