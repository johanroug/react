import React from 'react';
import Child2 from './Child2';

const child = (props) => {
  return (
    <div>
      child1
      <br />
      render child 2
      <br />
      <br />
      <Child2 />
    </div>
  );
};

export default child;
