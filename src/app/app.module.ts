import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './modules/layout/layout.module';
import { ExchangeRateModule } from './modules/exchange-rate/exchange-rate.module';
import { CustomerModule } from './modules/customer/customer.module';
import { HomeModule } from './modules/home/home.module';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ExchangeRateModule,
    CustomerModule,
    HomeModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
