import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
// import "@polymer/paper-button/paper-button"
import * as template from './template.html';
import * as style from './style.css';

const api = async (uri) => await (await fetch(`${uri}`, {})).json();

export class AppNocker extends PolymerElement {

  name = 'Guest';
  info: Service.Info = { name: '', description: '' };

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

  ready() {
    super.ready();
  }

  private async fetchData(ev) {
    try {
      const info = await api('/api/service');
      this.info = Object.assign({} , {
        name: info.name,
        description: info.description,
      })
    } catch (error) {
      console.error(error)
    } finally {
      console.info('Done')
    }
  }

  actionClick(ev) {
    this.fetchData(ev)
  }
}
