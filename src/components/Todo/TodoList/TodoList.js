import React from 'react';

const TodoList = props => {
  return (
    <li>
      <input type='checkbox'
        checked={props.checked}
        value={props.checked}
        onChange={props.toggleChecked} />
      {props.title} <br />
      {props.checked ? 'ok' : 'næ'}
    </li>
  );
};

export default TodoList;
