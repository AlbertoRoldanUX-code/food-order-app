import React from 'react';
import CartContext from './cart-context';
import { useReducer } from 'react';

const cartReducer = function (state, action) {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //Check if the item is already in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // Update amount of item if there's already an item with the same id
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // Add item to cart if it's not there already
    else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === 'REMOVE') {
    //1º Find item in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    // If amount gets to 1
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return {
    items: [],
    totalAmount: 0,
  };
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
