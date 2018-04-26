import React from 'react';

const TodoCreate = (props) => {
  return (
    <div>
      <input type='text'
        onKeyPress={props.create}
        onChange={props.change}
        value={props.value}
      />
    </div>
  );
};

export default TodoCreate;
