import React from 'react';
import classes from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Burger from '../NavigationItems/Burger/Burger';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Burger clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar
;
