import React from 'react';
import classes from './BuildControl.scss';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.remove} className={classes.Less}>Less</button>
      <button onClick={props.add} className={classes.More}>More</button>
      {/* {props.disabled} */}
    </div>
  );
};

export default BuildControl;
