import React from 'react';
import classes from './Burger.scss';
import BurgerIngredient from '../BurgerIngredients/BurgerIngrredients';

const burger = (props) => {
  let transformedIngredients = props.ingredients
    .map((ingredient, index) => {
      return <BurgerIngredient key={index + ingredient} type={ingredient} />;
    });
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
