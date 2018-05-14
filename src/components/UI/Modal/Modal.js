import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Modal.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.show !== this.props.show;
  }
  render () {
    return (
      <Aux>
        <div className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0,
            zIndex: this.props.show ? 500 : -1
          }}>
          <div onClick={this.props.close}>close</div>
          {this.props.children}
        </div>
        <Backdrop show={this.props.show} close={this.props.close} />
      </Aux>
    );
  }
}

export default Modal;
