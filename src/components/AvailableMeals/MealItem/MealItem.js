import React, { useContext } from 'react';
import cartContext from '../../../store/cart-context';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';

function MealItem(props) {
  const cartCtx = useContext(cartContext);

  const addToCartHandler = function (amount) {
    cartCtx.addItem({
      amount: amount,
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
}

export default MealItem;
