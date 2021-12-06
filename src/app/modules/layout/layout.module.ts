import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './component/nav/nav.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
