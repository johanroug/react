import React from 'react';
import classes from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <dir>
        menu
      </dir>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar
;
