import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';

import { DogCartComponent } from './dog-cart.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DogCartComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    HttpClientModule
  ],
  exports: [DogCartComponent]
})
export class DogCartModule { }
