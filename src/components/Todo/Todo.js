import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import TodoCreate from './TodoCreate/TodoCreate';
import {observer} from 'mobx-react';

@observer
export default class Todo extends Component {
  onCreate = e => {
    if (e.which === 13) {
      this.props.store.create(e.target.value);
      e.target.value = '';
    }
  }

  onChecked = (id) => {
    this.props.store.checked(id);
  }

  render () {
    const { todos, tellme } = this.props.store;

    const todosList = todos.map(todo => {
      return <TodoList
        key={todo.id}

        {...todo} // this will create all props with key / values
        // checked={todo.checked} // could also be like this to get props
        // title={todo.title} // could also be like this to get props

        toggleChecked={this.onChecked.bind(this, todo.id)} />;
    });
    return (
      <div className='App'>
        {tellme}
        <TodoCreate
          create={this.onCreate} />

        <ul>
          {todosList}
        </ul>
      </div>
    );
  }
}
