import React, { Fragment } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

function Cart(props) {
  const onDeleteHandler = function (name) {
    props.onDelete(name);
  };

  const onOrderHandler = function () {
    console.log('Ordering...');
  };

  const onCloseHandler = function () {
    props.onClose(false);
  };

  return (
    <Fragment>
      <ul className={styles['cart-items']}>
        {props.meals.map((meal) => (
          <CartItem
            onDelete={onDeleteHandler}
            price={meal.price}
            name={meal.name}
            key={meal.id}
            amount={meal.amount}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onCloseHandler}>
          Close
        </button>
        <button className={styles.button} onClick={onOrderHandler}>
          Order
        </button>
      </div>{' '}
    </Fragment>
  );
}

export default Cart;
