import React, { Component } from 'react';
import './App.css';
import stores from './stores/index';
import Todo from './components/Todo/Todo';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Todo store={stores.todo} />
      </div>
    );
  }
}

export default App;
