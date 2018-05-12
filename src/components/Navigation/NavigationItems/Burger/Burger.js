import React from 'react';
import classes from './Burger.scss';

const burger = (props) => {
  return (
    <div className={classes.Burger} onClick={props.clicked} />
  );
};

export default burger;
