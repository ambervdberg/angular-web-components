import 'angular-elements/dist/angular-elements/polyfills.js';
import 'angular-elements/dist/angular-elements/main.js';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <hello-world name="an Angular element"></hello-world>
  </div>
`