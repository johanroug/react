import React from 'react';
import Aux from '../../../hoc/Aux';

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
      <p>Continue to checkout ?</p>
    </Aux>
  );
};

export default orderSummary;
