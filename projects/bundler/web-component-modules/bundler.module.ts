import {Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

export abstract class BundlerModule {
  constructor(injector: Injector, component: InstanceType<any>, name: string) {
    const ngElement = createCustomElement(component, {
      injector,
    });

    customElements.define(`wc-${name}`, ngElement);
  }

  ngDoBootstrap() {}
}
