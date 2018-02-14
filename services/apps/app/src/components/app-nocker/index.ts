import { Element as PolymerElement, html, Polymer } from '@polymer/polymer/polymer-element';

import "@polymer/app-layout/app-drawer/app-drawer"
import "@polymer/app-layout/app-drawer-layout/app-drawer-layout"
import "@polymer/app-layout/app-header-layout/app-header-layout"
import "@polymer/app-layout/app-header/app-header"
import "@polymer/app-layout/app-toolbar/app-toolbar"
import "@polymer/app-layout/app-toolbar/app-toolbar"
import "@polymer/iron-icons/iron-icons"
import "@polymer/paper-checkbox/paper-checkbox"
import "@polymer/paper-item/paper-icon-item"
import "@polymer/paper-card/paper-card"
import "@polymer/paper-button/paper-button"
import "@polymer/paper-icon-button/paper-icon-button"

import * as template from './template.html';
import * as style from './style.css';

const api = async (uri) => await (await fetch(`${uri}`, {})).json();

export class AppNocker extends PolymerElement {

  name = 'Guest';
  info: Service.Info = { name : 'Hello', description: 'Polymer 3 application' };
  $: Polymer;

  constructor() {
     super();
  }
  static get template() {
    return `
      <style>${style}</style>
      ${template}
    `;
  }
  static get properties() {
    return {
        isLoading: Boolean
    };
  }
  private async fetchData(ev) {
    try {
      const info = await api('/api/service');
      this.info = {
        name: info.name,
        description: info.description,
      }
    } catch (error) {
      console.error(error)
    } finally {
      console.info('Done')
    }
  }
  ready() {
    super.ready();
  }
  actionClick(ev) {
    this.fetchData(ev)
  }
  toggleDrawer(ev) {
    this.$.drawer.toggle()
  }
}
