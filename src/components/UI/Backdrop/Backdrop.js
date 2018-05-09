import React from 'react';
import classes from './Backdrop.scss';

const backdrop = (props) => {
  return (
    props.show ? <div className={classes.Backdrop} onClick={props.close}>back</div> : null
  );
};

export default backdrop;
