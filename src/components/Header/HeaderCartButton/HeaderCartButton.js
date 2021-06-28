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

  const onClickOutHandler = function (state) {
    setModal(state);
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
      {modal && <Modal onClickOut={onClickOutHandler} meals={props.meals} />}
    </Fragment>
  );
}

export default HeaderCartButton;
