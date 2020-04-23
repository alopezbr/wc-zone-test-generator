import {Injector, NgModule} from '@angular/core';
import {BundlerModule} from '../bundler.module';
import {BrowserModule} from '@angular/platform-browser';
import {UserGetterModule} from '../../../web-components/user-getter/src/lib/user-getter.module';
import {UserGetterComponent} from '../../../web-components/user-getter/src/lib/user-getter.component';

@NgModule({
  imports: [
    BrowserModule,
    UserGetterModule
  ],
  entryComponents: [UserGetterComponent]
})
export class UserGetterBundlerModule extends BundlerModule {
  constructor(injector: Injector) {
    super(injector, UserGetterComponent, 'user-getter');
  }
}
