import React, { Component } from 'react';
import classes from './App.scss';
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
    return (
      <div className={classes.App}>
        <AuthContext.Provider value={this.state}>
          <Child />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
