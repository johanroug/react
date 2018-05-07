import React from 'react';

import classes from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

// const disabledHandler = (type) => {
//   const disabledInfo = [...this.state.ingredients];
//   disabledInfo.filter(value => {
//     return value === controls.type;
//   });
// };

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl, index) => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          // disabled={disabledHandler.bind(this, ctrl.type)}
          add={props.add.bind(this, ctrl.type)}
          remove={props.remove.bind(this, ctrl.type)} />
      );
    })}
  </div>
);

export default buildControls
;
