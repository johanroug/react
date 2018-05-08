import React from 'react';

import classes from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current price is: <strong>{props.totalPrice.toFixed(2)}</strong></p>
      {controls.map((ctrl, index) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            disabled={props.disabled.indexOf(ctrl.type) === -1}
            add={props.add.bind(this, ctrl.type)}
            remove={props.remove.bind(this, ctrl.type)} />
        );
      })}
      <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
    </div>);
};

export default buildControls;
