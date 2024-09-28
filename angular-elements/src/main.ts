import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ByeComponent } from './app/bye/bye.component';

if (environment.production) {
  enableProdMode();
}

(async () => {

  const app = await createApplication();

  const helloElement = createCustomElement(HelloWorldComponent, {
    injector: app.injector,
  });

  const byeElement = createCustomElement(ByeComponent, {
    injector: app.injector,
  });

  customElements.define('hello-world', helloElement);
  customElements.define('bye-world', byeElement);
})();
