import React, { Fragment, useEffect, useState, useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import Modal from './Modal/Modal';
import cartContext from '../../../store/cart-context';

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

  const ctx = useContext(cartContext);

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

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
            {numberOfCartItems}
          </a>
        </button>
      )}
      {modal && <Modal onHideModal={onHideModalHandler} />}
    </Fragment>
  );
}

export default HeaderCartButton;
