import React from 'react';
import {AuthContext} from '../containers/App';
import style from './Child2.scss';

const child2 = (props) => {
  return (
    <div className={style.Child2}>
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
