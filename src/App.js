import React from 'react';
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

// 1º Clear cart after confirming the order
// 2º Show loading spinner when ordering.
