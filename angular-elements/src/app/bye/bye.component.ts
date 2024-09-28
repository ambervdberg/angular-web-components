import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bye',
  standalone: true,
  template: `<h2>I'm {{name}}</h2>`
})
export class ByeComponent {
  @Input() name: string = 'Hello';
}
