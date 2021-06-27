import React from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header() {
  return (
    <div className={styles.header}>
      <h1 style={{ marginLeft: '10%' }}>ReactMeals</h1>
      <HeaderCartButton />
    </div>
  );
}

export default Header;
