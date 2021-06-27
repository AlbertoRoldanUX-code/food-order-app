import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';

function MealItem(props) {
  const onSendHandler = function (amount) {
    props.onSend(amount);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <MealItemForm onSend={onSendHandler} />
    </li>
  );
}

export default MealItem;
