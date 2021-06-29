import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
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
      {ReactDOM.createPortal(
        <Card>
          <span className={styles.modal}>
            <Cart meals={props.meals} onDelete={onDeleteHandler} />
          </span>
        </Card>,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={onClickHandler}></div>,
        document.getElementById('overlays')
      )}
    </Fragment>
  );
}

export default Modal;
