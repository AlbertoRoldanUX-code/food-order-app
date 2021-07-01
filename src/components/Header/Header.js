import React, { Fragment } from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
import meals from '../../assets/meals.jpg';

function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 style={{ marginLeft: '10%' }}>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={meals} alt='meals' />
      </div>
    </Fragment>
  );
}

export default Header;
