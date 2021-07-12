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
//////////// 4º Make sure that under rules, you have read and write set to true.
//////////// 5º Fetch the meals data from Firebase adding a GET request.
//////////// 6º Add basic checkout form with name and address inputs once you click on the order button
//////////// 7º Validate user input before we submit it.
//////////// 8º Submit entered data to Firebase with POST request
