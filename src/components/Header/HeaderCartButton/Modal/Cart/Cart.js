import React from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

function Cart(props) {
  const onDeleteHandler = function (name) {
    props.onDelete(name);
  };

  return (
    <div className={styles['cart-items']}>
      {props.meals.map((meal) => (
        <CartItem
          onDelete={onDeleteHandler}
          price={meal.price}
          name={meal.name}
          key={meal.id}
          amount={meal.amount}
        />
      ))}
    </div>
  );
}

export default Cart;
