import React, { useState } from 'react';
import Header from './components/Header/Header';
import './index.css';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;

//////////// 1º Import css files from github.
//////////// 2º Create Header component.
//////////// 3º Create HeaderCartButton component inside of header component.
//////////// 4º Create main description component.
//////////// 5º Add background-color to body element.
//////////// 6º Create available meals with the dummy meals.
//////////// 7º Implement bump on the HeaderCartButton when clicking + Add.
//////////// 8º Implement adding a new meal to HeaderCartButton when clicking on + Add.
//////////// 9º Implement viewing the Cart as a modal.
//////////// 10º Implement changing the amount of meals on Cart component.
//////////// 11º Remove meal on Cart component if clicking on - and there's only 1 left.
//////////// 12º Create Close and Order buttons.
//////////// 13º Console.log Ordering... when clicking on Order button from Cart component.
//////////// 14º Implement closing modal when clicking on Close button on Cart component.
//////////// 15º Implement opening the modal only when there's meals.
//////////// 16º Change number on the button to the sum of the amounts of each meal.
//////////// 17º Remove adding the amounts to the Button component with props.
// 18º Implement adding amounts if adding the same meal to the cart.
// 19º Implement viewing the total amount of every meal on the Button component.
// 20º Implement updating the count when changing the amount of meals on Cart component.
// 21º Remove passing data with props.
// 22º Use context to manage to manage the overall cart data
