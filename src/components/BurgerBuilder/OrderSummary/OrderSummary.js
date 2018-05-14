import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {props.ingredients.map((ingredients, index) => (
          <li key={index}>
            <span style={{textTransform: 'capitalize'}}>{ingredients}</span>
          </li>
        ))}
      </ul>
      <p><strong>Total price is: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout ?</p>
      <Button clicked={props.purchaseCancel} type='Danger'>CANCEL</Button>
      <Button clicked={props.purchaseContinue} type='Success'>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
