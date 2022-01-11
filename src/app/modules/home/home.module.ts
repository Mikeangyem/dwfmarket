import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailComponent } from '../product/component/product-detail/product-detail.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'product-detail/:gtin', component: ProductDetailComponent}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
