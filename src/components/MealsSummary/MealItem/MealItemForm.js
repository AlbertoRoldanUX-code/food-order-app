import React from 'react';
import Input from '../../Input/Input';
import styles from './MealItemForm.module.css';

function MealItemForm() {
  return (
    <form className={styles.form}>
      <Input />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
