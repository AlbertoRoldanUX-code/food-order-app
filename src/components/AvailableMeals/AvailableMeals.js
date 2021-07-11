import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const fetchMeals = async function () {
    try {
      const response = await fetch(
        'https://react-http-484b3-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );
      const data = await response.json();
      setMeals(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Card style={styles.meals}>
      <ul>
        {meals.map((meal, index) => (
          <MealItem
            name={meal.name}
            description={meal.description}
            price={meal.price}
            key={index}
            id={index}
          />
        ))}
      </ul>
    </Card>
  );
}

export default AvailableMeals;
