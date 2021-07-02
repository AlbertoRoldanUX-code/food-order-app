import React, { Fragment, useEffect, useState, useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import Modal from './Modal/Modal';
import cartContext from '../../../store/cart-context';

function HeaderCartButton(props) {
  const [bump, setBump] = useState(false);
  const [modal, setModal] = useState(false);

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

  useEffect(() => {
    if (ctx.items.length === 0) return;
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <Fragment>
      {!modal && (
        <button
          className={`${styles.button} ${bump ? styles.bump : ''}`}
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
