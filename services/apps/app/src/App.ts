import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import * as packJSON from '../package.json';

const api = async (uri) => await (await fetch(`${uri}`, {})).json();

export default class App extends PolymerElement {

  name = 'Guest';
  isLoading = false;

  info: Service.Info = {
    name: (<any>packJSON).name,
    description: (<any>packJSON).description,
  };

  static get properties() {
    return {
      name: String,
      isLoading: Boolean,
    };
  }

  ready() {
    super.ready();
    console.log('Ready');
  }

  private fetchData = async (ev) => {
    try {
      this.isLoading = true;
      const result = await api('/api/service');
      if(result.error) throw result;
      this.info = {
        name: result.name,
        description: result.description,
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
      console.info('Done');
    }
  }

  actionClick = (ev) => {
    this.fetchData(ev);
  };

  static get template() {
    return `
      <h1>Hello <span>[[name]]</span>!</h1>
      <h3>[[info.name]]</h3>
      <h3>[[info.description]]</h3>
      <button on-click="actionClick">Explore api!</button><small>is loading: [[isLoading]]</small>
    `;
  }
}
