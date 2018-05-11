import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
  return (
    <Aux>
      <div>
        <Toolbar />
        Toolbar, SideDrawer, Backdrop
      </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default layout;
