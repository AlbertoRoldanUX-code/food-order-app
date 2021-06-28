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
      <Card>
        <span className={styles.modal}>
          <Cart meals={props.meals} onDelete={onDeleteHandler} />
        </span>
      </Card>
      <div className={styles.backdrop} onClick={onClickHandler}></div>
    </Fragment>
  );
}

export default Modal;
