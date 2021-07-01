import { useState } from 'react';
import styles from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={styles['cart-item']}>
      <div>
        <h2></h2>
        <div className={styles.summary}>
          <span className={styles.price}></span>
          <span className={styles.amount}>x </span>
        </div>
      </div>
      <div className={styles.actions}>
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;

// props.onRemove
