import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hello-world',
  standalone: true,
  template: `<h2>I'm {{name}}</h2>`,
  styles: [`h2 { color: blue; }`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldComponent {
  @Input() name: string = 'Bye';
}
