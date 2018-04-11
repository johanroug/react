import React from 'react';
import {AuthContext} from '../containers/App';

const child2 = (props) => {
  return (
    <div>
      Child2
      <br />
      <ul>
        <AuthContext.Consumer>{auth => {
          return (
            auth.posts.map(items => {
              return (<li key={items.id}>{items.title}</li>);
            })
          );
        }}
        </AuthContext.Consumer>
      </ul>
    </div>
  );
};

export default child2;
