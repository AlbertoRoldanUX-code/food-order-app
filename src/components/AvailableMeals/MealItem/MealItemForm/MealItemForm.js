import React, { useState } from 'react';
import styles from './MealItemForm.module.css';

function MealItemForm(props) {
  const [enteredAmount, setEnteredAmount] = useState('1');

  const onChangeHandler = function (e) {
    setEnteredAmount(e.target.value);
  };

  const onSubmitHandler = function (e) {
    e.preventDefault();
    props.onAddToCart(+enteredAmount);
    setEnteredAmount('1');
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor={props.key}>Amount</label>
        <input
          value={enteredAmount}
          type='number'
          onChange={onChangeHandler}
          min='1'
          max='5'
          step='1'
          id={props.id}
        />
      </div>
      <button type='submit'>+ Add</button>
    </form>
  );
}

export default MealItemForm;
