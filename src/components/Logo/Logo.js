import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.scss';

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt='' />
    </div>
  );
};

export default logo
;
