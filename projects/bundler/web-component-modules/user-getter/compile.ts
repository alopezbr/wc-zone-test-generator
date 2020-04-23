import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UserGetterBundlerModule} from './user-getter.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(UserGetterBundlerModule)
  .catch(err => console.error(err));
