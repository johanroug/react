import React, { Component } from 'react';
import './App.css';
import {dataService} from '../components/services/data.service';
import Child from '../components/Child';

export const AuthContext = React.createContext();

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
    // const posts = this.state.posts.map(items => <li key={items.id}>{items.title}</li>);
    return (
      <div>
        {/* <ul className='App'>
          {posts}
        </ul> */}
        <AuthContext.Provider value={this.state}>
          <Child />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
