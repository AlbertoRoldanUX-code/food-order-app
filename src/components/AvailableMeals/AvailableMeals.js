import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import LoadingSpinner from './LoadingSpinner';

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = async function () {
    try {
      const response = await fetch(
        'https://react-http-484b3-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );
      const data = await response.json();
      if (!response.ok) throw new Error('Something went wrong');
      setMeals(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Card style={styles.meals}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
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
      )}
    </Card>
  );
}

export default AvailableMeals;
