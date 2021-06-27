import React from 'react';
import styles from './Input.module.css';

function Input() {
  return (
    <div className={styles.input}>
      <label htmlFor=''>Amount</label>
      <input defaultValue='1' type='number' />
    </div>
  );
}

export default Input;
