import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Cart from './Cart/Cart.js';
import Card from '../../../Card/Card';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import ConfirmationMessage from './ConfirmationMessage/ConfirmationMessage';
import LoadingSpinner from '../../../AvailableMeals/LoadingSpinner';

function Modal(props) {
  const [isOrdering, setIsOrdering] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isReviewing, setIsReviewing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onOrderHandler = function () {
    setIsOrdering(true);
  };

  const onConfirmHandler = function () {
    setIsConfirmed(true);
    setIsOrdering(false);
    setIsReviewing(false);
  };

  const onLoadingHandler = function () {
    setIsOrdering(false);
    setIsReviewing(false);
    setIsLoading(true);
  };
  const onStopLoadingHandler = function () {
    setIsLoading(false);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Card>
          <span className={styles.modal}>
            {isReviewing && (
              <Cart onHideModal={props.onHideModal} onOrder={onOrderHandler} />
            )}
            {isOrdering && (
              <CheckoutForm
                onHideModal={props.onHideModal}
                onConfirm={onConfirmHandler}
                onLoading={onLoadingHandler}
                onStopLoading={onStopLoadingHandler}
              />
            )}
            {isConfirmed && (
              <ConfirmationMessage onHideModal={props.onHideModal} />
            )}
            {isLoading && <LoadingSpinner />}
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
