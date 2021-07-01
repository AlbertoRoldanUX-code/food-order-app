import React from 'react';
import CartContext from './cart-context';
import { useReducer } from 'react';

const cartReducer = function (state, action) {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === 'REMOVE') {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    return updatedItems;
  }

  return { items: [], totalAmount: 0 };
};

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemToCartHandler = function (item) {
    dispatchCart({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = function (id) {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
