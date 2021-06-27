import React, { useState, Fragment } from 'react';
import Header from './components/Header/Header';
import './index.css';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';

function App() {
  const [totalAmounts, setTotalAmounts] = useState('');

  const onSendHandler = function (amount) {
    setTotalAmounts((prevAmounts) => {
      return [+amount + +prevAmounts];
    });
  };

  return (
    <Fragment>
      <Header totalAmounts={totalAmounts} />
      <MealsSummary />
      <AvailableMeals onSend={onSendHandler} />
    </Fragment>
  );
}

export default App;

//////////// 1º Import css files from github.
//////////// 2º Create Header component.
//////////// 3º Create HeaderCartButton component inside of header component.
//////////// 4º Create main description component.
//////////// 5º Add background-color to body element.
//////////// 6º Create available meals with the dummy meals.
// 7º Implement bump on the HeaderCartButton when clicking + Add.
// 8º Implement adding a new meal to HeaderCartButton when clicking on + Add.
// 9º Implement viewing the Cart as a modal.
// 10º Implement changing the amount of meals on Cart component.
// 11º Remove meal on Cart component if clicking on - and there's only 1 left.
// 12º Console.log Ordering... when clicking on Order button from Cart component.
// 13º Implement closing modal when clicking on Close button on Cart component.
