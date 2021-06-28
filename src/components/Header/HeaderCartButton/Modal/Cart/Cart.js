import React from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

function Cart(props) {
  const onRemoveHandler = function () {
    console.log(props.meals);
  };
  return (
    <div className={styles['cart-items']}>
      {props.meals.map((meal) => (
        <CartItem
          price={meal.price}
          name={meal.name}
          key={meal.id}
          amount={meal.amount}
          onRemove={onRemoveHandler}
        />
      ))}
    </div>
  );
}

export default Cart;
