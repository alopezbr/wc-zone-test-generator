import { NgModule } from '@angular/core';
import { UserGetterComponent } from './user-getter.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserGetterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [UserGetterComponent]
})
export class UserGetterModule { }
