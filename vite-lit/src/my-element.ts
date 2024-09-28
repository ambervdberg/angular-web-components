import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import 'angular-elements/dist/angular-elements/polyfills.js';
import 'angular-elements/dist/angular-elements/main.js';

/**
 * A Simple Lit element
 *
 * @slot - This element has a slot
 */
@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
    <h2>Lit Element</h2>
    <ul>
      <li>
        <slot></slot>
      </li>
    </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
