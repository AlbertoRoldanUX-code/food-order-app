import React, { useState } from 'react';
import Header from './components/Header/Header';
import './index.css';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import CartProvider from './store/CartProvider';

function App() {
  const [totalAmounts, setTotalAmounts] = useState('');
  const [meals, setMeals] = useState('');

  const onSendAmountHandler = function (amount) {
    setTotalAmounts((prevAmounts) => {
      return [+amount + +prevAmounts];
    });
  };

  const onSendMealHandler = function (meal) {
    // if (meals) {
    //   for (let i = 0; i < meals.length; i++) {
    //     if (meals[i].name === meal.name) {
    //       console.log('ya está en la cesta');
    //       setMeals((prevMeals) => {
    //         return [{ ...meals[i], ...meal }, ...prevMeals];
    //       });
    //     }

    //     // if (meals[i].name !== meal.name) {
    //     //   console.log('no está todavía');
    //     //   setMeals((prevMeals) => {
    //     //     return [meal, ...prevMeals];
    //     //   });
    //     // }
    //   }
    // }
    // if (!meals) {
    //   setMeals((prevMeals) => {
    //     return [meal, ...prevMeals];
    //   });
    // }
    setMeals((prevMeals) => {
      if (meals) {
        for (let i = 0; i < meals.length; i++) {
          if (meals[i].name === meal.name) {
            console.log('already there');
          }
        }
      }

      return [meal, ...prevMeals];
    });
  };
  console.log(meals);

  const onDeleteHandler = function (name) {
    setMeals((prevMeals) => {
      const updatedMeals = prevMeals.filter((meal) => meal.name !== name);
      return updatedMeals;
    });
  };

  return (
    <CartProvider>
      <Header
        totalAmounts={totalAmounts}
        meals={meals}
        onDelete={onDeleteHandler}
      />
      <MealsSummary />
      <AvailableMeals
        onSendAmount={onSendAmountHandler}
        onSendMeal={onSendMealHandler}
      />
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
// 15º Implement adding amounts if adding the same meal to the cart.
// 16º Implement viewing the total amount of every meal on the Button component.
//////////// 17º Implement opening the modal only when there's meals.
// 18º Implement updating the count when changing the amount of meals on Cart component.
//////////// 19º Change number on the button to the sum of the amounts of each meal.
// 20º Remove passing data with props.
// 21º Remove adding the amounts to the Button component with props.

// Use context to manage to manage the overall cart data
