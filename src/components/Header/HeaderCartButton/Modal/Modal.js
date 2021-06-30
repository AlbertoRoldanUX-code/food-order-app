import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Cart from './Cart/Cart.js';
import Card from '../../../Card/Card';

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Card>
          <span className={styles.modal}>
            <Cart
              meals={props.meals}
              onDelete={props.onDelete}
              onHideModal={props.onHideModal}
            />
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
