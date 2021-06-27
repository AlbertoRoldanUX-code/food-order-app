import React from 'react';
import Header from './components/Header/Header';
import './index.css';
import styles from './components/Header/Header.module.css';
import meals from './meals.jpg';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.mainImage}>
        <img src={meals} alt='meals' />
      </div>
    </div>
  );
}

export default App;

//////////// 1º Import css files from github.
//////////// 2º Create Header component.
//////////// 3º Create HeaderCartButton component inside of header component.
// 4º Create main description component.
// 5º Create available meals with the dummy meals.
// 6º Implement adding meals to the cart by clicking the Add button.
// 7º Implement changing the amount of meals on AvailableMeals component.
// 8º Implement opening modal when clicking on Cart.
// 9º Implement changing the amount of meals on Cart component.
// 10º Remove meal on Cart component if clicking on - and there's only 1 left.
// 11º Console.log Ordering... when clicking on Order button from Cart component.
// 12º Implement closing modal when clicking on Close button on Cart component.
