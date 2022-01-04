import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from '../app/modules/exchange-rate/component/exchange-rate/exchange-rate.component';
import { RegionComponent } from '../app/modules/customer/component/region/region.component';
import { HomeComponent } from '../app/modules/home/component/home/home.component';
import { CategoryComponent } from '../app/modules/product/component/category/category.component';
import { CustomerComponent } from '../app/modules/customer/component/customer/customer.component';
import { CustomerDetailComponent } from '../app/modules/customer/component/customer-detail/customer-detail.component';


const routes: Routes = [
  {path: 'exchange-rate', component: ExchangeRateComponent},
  {path: 'region', component: RegionComponent},
  {path: '', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-detail/:rfc', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
