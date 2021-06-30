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

  return (
    <Fragment>
      {props.meals && (
        <ul className={styles['cart-items']}>
          {props.meals.map((meal, index) => (
            <CartItem
              onDelete={onDeleteHandler}
              price={meal.price}
              name={meal.name}
              key={index}
              amount={meal.amount}
            />
          ))}
        </ul>
      )}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideModal}>
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
