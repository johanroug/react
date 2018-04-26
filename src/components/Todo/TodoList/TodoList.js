import React from 'react';

const TodoList = props => {
  return (
    <li>{props.todo.title}</li>
  );
};

export default TodoList;
