import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InfocardComponent } from './infocard/infocard.component';


@NgModule({
  declarations: [
    NavbarComponent,
    InfocardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfocardComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
