import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';

function MealItem(props) {
  const onSendHandler = function (amount) {
    const meal = {
      name: props.name,
      price: props.price,
      id: props.id,
      amount: Number(amount),
    };
    props.onSendAmount(amount);
    props.onSendMeal(meal);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>
      <MealItemForm id={props.id} onSendAmount={onSendHandler} />
    </li>
  );
}

export default MealItem;
