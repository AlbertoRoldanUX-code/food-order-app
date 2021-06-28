import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';

function MealItem(props) {
  const onSendHandler = function (amount) {
    const meal = {
      name: props.name,
      price: props.price,
      id: Math.random().toString(),
      amount: amount,
    };
    props.onSend(amount);
    props.onSendMeal(meal);
  };

  const onClickHandler = function () {};

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <span onClick={onClickHandler}>
        <MealItemForm onSend={onSendHandler} />
      </span>
    </li>
  );
}

export default MealItem;
