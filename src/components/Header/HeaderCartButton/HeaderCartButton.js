import React, { Fragment, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import Modal from './Modal/Modal';

function HeaderCartButton(props) {
  const [bump, setBump] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setBump(false);
    return () => {
      setTimeout(() => {
        setBump(true);
      }, 100);
    };
  }, [props.totalAmounts]);

  const onClickHandler = function () {
    setModal(true);
  };

  const onHideModalHandler = function () {
    setModal(false);
  };

  const onDeleteHandler = function (name) {
    props.onDelete(name);
  };

  return (
    <Fragment>
      {!modal && (
        <button
          className={
            bump ? `${styles.button} ${styles.bump}` : `${styles.button}`
          }
          onClick={onClickHandler}
        >
          <span className={styles.icon}>
            <CartIcon />
          </span>
          <p>Your Cart</p>
          <a
            style={{ color: 'white', textDecoration: 'none' }}
            href='/#'
            className={styles.badge}
          >
            {props.totalAmounts || 0}
          </a>
        </button>
      )}
      {modal && (
        <Modal
          onHideModal={onHideModalHandler}
          meals={props.meals}
          onDelete={onDeleteHandler}
        />
      )}
    </Fragment>
  );
}

export default HeaderCartButton;
