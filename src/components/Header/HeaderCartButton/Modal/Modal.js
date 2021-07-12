import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Cart from './Cart/Cart.js';
import Card from '../../../Card/Card';
import CheckoutForm from './CheckoutForm/CheckoutForm';

function Modal(props) {
  const [isOrdering, setIsOrdering] = useState(false);

  const onOrderHandler = function () {
    setIsOrdering(true);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Card>
          <span className={styles.modal}>
            {!isOrdering && (
              <Cart onHideModal={props.onHideModal} onOrder={onOrderHandler} />
            )}
            {isOrdering && <CheckoutForm />}
          </span>
        </Card>,

        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={props.onHideModal}></div>,
        document.getElementById('overlays')
      )}
    </Fragment>
  );
}

export default Modal;
