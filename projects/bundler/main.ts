import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {DogCartBundlerModule} from './web-component-modules/dog-cart/dog-cart.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(DogCartBundlerModule)
  .catch(err => console.error(err));
