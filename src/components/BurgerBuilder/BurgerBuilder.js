import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from '../BurgerBuilder/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: [],
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState = (itemsCount) => {
    this.setState({purchasable: itemsCount > 0}); // return true or false
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

    this.updatePurchaseState(updatedIngredients.length);
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

      this.updatePurchaseState(updatedIngredients.length);
    }
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }
  purchaseContinueHandler = () => {
    console.log('you continue');
  }

  render () {
    const disabledInfo = this.state.ingredients
      .reduce((p, c) => {
        if (p.indexOf(c) === -1) { // if fx salad is not is array
          p.push(c); // then create it
        }

        return p;
      }, []);

    return (
      <Aux>
        <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          add={this.addIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          remove={this.removeIngredientHandler}
          purchasing={this.purchaseHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
