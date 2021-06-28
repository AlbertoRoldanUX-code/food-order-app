import { useState } from 'react';
import styles from './CartItem.module.css';

const CartItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const onRemoveHandler = function () {
    setAmount(+amount - 1);
  };

  const onAddHandler = function () {
    setAmount(+amount + 1);
  };

  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{props.price}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

// props.onRemove
