import { NgModule } from '@angular/core';
import { MagicButtonComponent } from './magic-button.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [MagicButtonComponent],
  imports: [
    ButtonModule
  ],
  exports: [MagicButtonComponent]
})
export class MagicButtonModule { }
