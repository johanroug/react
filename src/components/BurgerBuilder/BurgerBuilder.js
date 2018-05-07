import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: [
      'salad',
      'bacon',
      'cheese',
      'bacon'
    ],
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = [...this.state.ingredients];
    updatedIngredients.push(type);

    let totalPrice = this.state.totalPrice;
    totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: totalPrice
    });
  }

  removeIngredientHandler = (type) => {
    const updatedIngredients = [...this.state.ingredients];

    if (updatedIngredients.length > 0) {
      let totalPrice = this.state.totalPrice;

      for (let i = 0; i < updatedIngredients.length; i++) {
        if (updatedIngredients[i] === type) {
          updatedIngredients.splice(i, 1);
          totalPrice = totalPrice - INGREDIENT_PRICES[type];
          break;
        }
      }
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: totalPrice
      });
    }
  }

  render () {
    return (
      <Aux>
        {this.state.totalPrice}
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
