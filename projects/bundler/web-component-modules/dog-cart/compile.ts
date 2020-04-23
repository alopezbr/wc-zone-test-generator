import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DogCartBundlerModule} from './dog-cart.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(DogCartBundlerModule, { ngZone: (window as any).ngZone })
  .catch(err => console.error(err));
