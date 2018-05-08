import React from 'react';
import classes from './BuildControl.scss';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.remove} disabled={props.disabled} className={classes.Less}>Less</button>
      <button onClick={props.add} className={classes.More}>More</button>
    </div>
  );
};

export default BuildControl;
