import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from './Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      'salad',
      'bacon',
      'cheese',
      'bacon'
    ]
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
