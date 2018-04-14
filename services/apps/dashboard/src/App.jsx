import React from 'react';
import {name, description} from '../package.json';

const api = async (uri) => await (await fetch(`${uri}`, {})).json();

export default class App extends React.Component {

    name = 'Guest';

    state = {
      name,
      description,
      isLoading: false,
    };

    componentDidMount() {
      console.log('Ready');
    }

    fetchData = async () => {
      try {
        this.isLoading = true;
        this.setState({ isLoading: true });
        const result = await api('/api/service');
        if(result.error) throw result;
        this.setState({ ...result });
      } catch (error) {
        console.error(error);
      } finally {
        console.info('Done');
        this.setState({ isLoading: false });
      }
    };

    handleClick = () => {
      this.fetchData();
    };

    render() {
      return <div>
        <h1>Hello <span>{this.name}</span>!</h1>
        <h3>{this.state.name}</h3>
        <h3>{this.state.description}</h3>
        <button onClick={this.handleClick}>Explore api!</button><small>Loading: {this.state.isLoading.toString()}</small>
      </div>
    }
}
