import React, { useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

function HeaderCartButton(props) {
  const [bump, setBump] = useState(false);

  useEffect(() => {
    setBump(false);
    return () => {
      setTimeout(() => {
        setBump(true);
      }, 100);
    };
  }, [props.totalAmounts]);

  return (
    <button
      className={bump ? `${styles.button} ${styles.bump}` : `${styles.button}`}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <p>Your Cart</p>
      <a
        style={{ color: 'white', textDecoration: 'none' }}
        href='/#'
        className={styles.badge}
      >
        {props.totalAmounts || 0}
      </a>
    </button>
  );
}

export default HeaderCartButton;
