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

//////////// 1º Use the same project from Firebase using the Realtime DB.
//////////// 2º Clear any existing data you may have.
//////////// 3º Move dummy meals data to Firebase manually.
// 4º Add basic checkout form with name and address inputs and order button
// 5º Validate user input before we submit it.
// 6º Make sure that under rules, you have read and write set to true.
// 7º Submit entered data to a backend with POST request
// 8º Fetch the meals data from Firebase adding a GET request.
