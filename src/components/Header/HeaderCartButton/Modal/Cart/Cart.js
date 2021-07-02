import React, { Fragment, useContext } from 'react';
import cartContext from '../../../../../store/cart-context';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

function Cart(props) {
  const cartCtx = useContext(cartContext);

  const onOrderHandler = function () {
    console.log('Ordering...');
  };

  // const totalAmount = cartCtx.item.amount * cartCtx.item.price;

  console.log(cartCtx.items.length);

  return (
    <Fragment>
      <ul className={styles['cart-items']}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              name={item.name}
              price={item.price}
              amount={item.amount}
              key={item.id}
            />
          );
        })}
      </ul>

      <div className={styles.total}>
        <span>Total Amount</span>
        {/* <span>${totalAmount}</span> */}
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideModal}>
          Close
        </button>

        {cartCtx.items.length > 0 && (
          <button className={styles.button} onClick={onOrderHandler}>
            Order
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default Cart;
