import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { InformationComponent } from './information/information.component';
import { Layout1Component } from './layout1/layout1.component';
import { MerchPageComponent } from './merch-page/merch-page.component';
import { PhotoGuideComponent } from './photo-guide/photo-guide.component';
import { SellACarComponent } from './sell-a-car/sell-a-car.component';
import { SubmitCarComponent } from './submit-car/submit-car.component';
import { SupportPageComponent } from './support-page/support-page.component';

const routes: Routes = [
  {path: '', component: Layout1Component},
  {path:'Home', component: Layout1Component},
  {path: 'Sell-Car', component: SellACarComponent},
  {path: 'Info', component: InformationComponent},
  {path: 'Support', component: SupportPageComponent},
  {path: 'Photos', component: PhotoGuideComponent},
  {path: 'Merch', component: MerchPageComponent},
  {path: 'Submit', component: SubmitCarComponent},
  {path: 'Account', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
