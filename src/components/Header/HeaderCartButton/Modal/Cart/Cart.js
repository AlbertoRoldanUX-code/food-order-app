import React from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {
  return (
    <div className={styles['cart-items']}>
      {props.meals.map((meal) => (
        <CartItem
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
