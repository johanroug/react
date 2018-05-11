import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Modal.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Aux>
      <div className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? 1 : 0,
          zIndex: props.show ? 500 : -1
        }}>
        <div onClick={props.close}>close</div>
        {props.children}
      </div>
      <Backdrop show={props.show} close={props.close} />
    </Aux>
  );
};

export default modal;
