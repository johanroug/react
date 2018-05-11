import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const naigationItem = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>Burger builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
);

export default naigationItem;
