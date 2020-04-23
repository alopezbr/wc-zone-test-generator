import {Injector, NgModule} from '@angular/core';
import {DogCartComponent, DogCartModule} from '../../../web-components/dog-cart/src/public-api';
import {BundlerModule} from '../bundler.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    DogCartModule
  ],
  entryComponents: [DogCartComponent]
})
export class DogCartBundlerModule extends BundlerModule {
  constructor(injector: Injector) {
    super(injector, DogCartComponent, 'dog-cart');
  }
}
