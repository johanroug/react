import React, {Component} from 'react';

import classes from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

class buildControls extends Component {
  render () {
    controls.map(item => {
      if (this.props.disabled.indexOf(item.type)) {
        item['disabled'] = false;
      } else {
        item['disabled'] = true;
      }
      return 'ok';
    });
    return (
      <div className={classes.BuildControls}>
        {controls.map((ctrl, index) => {
          return (
            <BuildControl
              key={ctrl.label}
              label={ctrl.label}
              disabled={ctrl.disabled}
              add={this.props.add.bind(this, ctrl.type)}
              remove={this.props.remove.bind(this, ctrl.type)} />
          );
        })}
      </div>);
  }
}

export default buildControls;
