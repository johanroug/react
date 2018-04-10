import React, { Component } from 'react';
import './App.css';
import {dataService} from '../components/services/data.service';

export const service = React.createContext();

class App extends Component {
  state = {
    posts: []
  }

  componentWillMount () {
    Promise.resolve(dataService())
      .then(posts => {
        this.setState({posts: posts});
      });
  }

  render () {
    return (
      <ul className='App'>
        {this.state.posts.map(items => <li key={items.id}>{items.title}</li>)}
      </ul>
    );
  }
}

export default App;
