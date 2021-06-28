import React, { Fragment } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

function Cart(props) {
  const onDeleteHandler = function (name) {
    props.onDelete(name);
  };

  const onClickHandler = function () {
    console.log('Ordering...');
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
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button} onClick={onClickHandler}>
          Order
        </button>
      </div>{' '}
    </Fragment>
  );
}

export default Cart;
