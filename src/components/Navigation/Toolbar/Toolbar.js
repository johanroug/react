import React from 'react';
import classes from './Toolbar.scss';
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <dir>menu</dir>
      <Logo />
      <nav>
        ...
      </nav>
    </header>
  );
};

export default toolbar
;
