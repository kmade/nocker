
// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import {
  Element as PolymerElement,
  html,
} from '../node_modules/@polymer/polymer/polymer-element.js';

// Added "export" to export the MyApp symbol from the module
export class AppNocker extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {

    return html`<div>
      Hello <div>[[name]]</div>
      <button on-click="clickHandler">Click me!</button>
      </div>`
  }

  constructor() {
    super();
    this.name = App.name;
  }

  static get properties() {
    name: {
      Type: String
    }
  }

  clickHandler(ev) {
    console.log(`Hello ${ev}`)
  }
}

customElements.define('app-nocker', AppNocker);
