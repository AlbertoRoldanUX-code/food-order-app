import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <CartIcon style={styles.icon} />
      <p>Your Cart</p>
      <a className={styles.badge}>0</a>
    </button>
  );
}

export default HeaderCartButton;
