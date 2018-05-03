import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  handleCreate = (e) => {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = '';
    }
  }

  handleChecked = (id) => {
    this.props.store.toggleChecked(id);
  }

  handleFilter = (e) => {
    this.props.store.filter = e.target.value;
  }

  render () {
    const {filter, filteredTodo} = this.props.store;

    const todoList = filteredTodo.map(todo => {
      return (
        <li key={todo.id}>
          <input type='checkbox' checked={todo.checked} onChange={this.handleChecked.bind(this, todo.id)} />
          {todo.title}
          {todo.id}
        </li>
      );
    });
    return (
      <div className='App'>
        <input type='text' onKeyPress={this.handleCreate} placeholder='create' />
        <input type='text' placeholder='filter' value={filter} onChange={this.handleFilter} />
        <div>
          {filter}
        </div>
        <ul>
          {todoList}
        </ul>
      </div>
    );
  }
}

export default App;
