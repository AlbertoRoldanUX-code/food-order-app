import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import Cart from './Cart/Cart.js';
import Card from '../../../Card/Card';

function Modal(props) {
  const onClickHandler = function () {
    props.onClickOut(false);
  };

  const onDeleteHandler = function (name) {
    props.onDelete(name);
  };

  return (
    <Fragment>
      <span className={styles.modal}>
        <Card>
          <Cart meals={props.meals} onDelete={onDeleteHandler} />
          <div className={styles.total}>
            <h2>Total Amount</h2>
            <h2>Total price</h2>
          </div>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.close}`}>
              Close
            </button>
            <button className={`${styles.button} ${styles.order}`}>
              Order
            </button>
          </div>
        </Card>
      </span>
      <div className={styles.backdrop} onClick={onClickHandler}></div>
    </Fragment>
  );
}

export default Modal;
