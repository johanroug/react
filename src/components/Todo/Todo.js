import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import TodoCreate from './TodoCreate/TodoCreate';
import {observer} from 'mobx-react';

@observer
export default class Todo extends Component {
  state = {
    inputValue: ''
  }

  onCreate = e => {
    if (e.which === 13) {
      this.props.store.create(e.target.value);
      this.setState({inputValue: ''});
    }
  }

  onChange = e => {
    this.setState({inputValue: e.target.value});
  }

  render () {
    const { todos, tellme } = this.props.store;

    const todosList = todos.map(todo => {
      return <TodoList key={todo.id} todo={todo} />;
    });
    return (
      <div className='App'>
        {tellme}
        <TodoCreate
          create={this.onCreate}
          change={this.onChange}
          value={this.state.inputValue} />

        <ul>
          {todosList}
        </ul>
      </div>
    );
  }
}
