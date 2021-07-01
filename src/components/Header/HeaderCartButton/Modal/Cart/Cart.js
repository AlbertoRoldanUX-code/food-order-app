import React, { Fragment } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

function Cart(props) {
  const onOrderHandler = function () {
    console.log('Ordering...');
  };

  return (
    <Fragment>
      {props.meals && <ul className={styles['cart-items']}></ul>}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideModal}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>{' '}
    </Fragment>
  );
}

export default Cart;
