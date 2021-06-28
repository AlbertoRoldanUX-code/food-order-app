import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import Cart from './Cart/Cart.js';
import Card from '../../../Card/Card';

function Modal(props) {
  const onClickHandler = function () {
    props.onClickOut(false);
  };

  return (
    <Fragment>
      <span className={styles.modal}>
        <Card>
          <Cart meals={props.meals} />
          <div
            style={{
              color: 'black',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h2>Total Amount</h2>
            <h2>Total price</h2>
          </div>
        </Card>
      </span>
      <div className={styles.backdrop} onClick={onClickHandler}></div>
    </Fragment>
  );
}

export default Modal;
