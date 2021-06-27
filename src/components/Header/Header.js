import React from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import meals from './meals.jpg';

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <h1 style={{ marginLeft: '10%' }}>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={styles.mainImage}>
        <img src={meals} alt='meals' />
      </div>
    </div>
  );
}

export default Header;
