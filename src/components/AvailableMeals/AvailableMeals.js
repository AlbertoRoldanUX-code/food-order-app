import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import LoadingSpinner from './LoadingSpinner';

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMeals = async function () {
    try {
      setError(null);
      const response = await fetch(
        'https://react-http-484b3-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );
      if (!response.ok) throw new Error('Something went wrong');
      const responseData = await response.json();
      // const loadedMeals = [];

      // for (const key in responseData) {
      //   loadedMeals.push({
      //     id: key,
      //     name: responseData[key].name,
      //     description: responseData[key].description,
      //     price: responseData[key].price,
      //   });
      // }

      setMeals(responseData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setIsLoading(false);
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
      {error && <p>{error}</p>}
    </Card>
  );
}

export default AvailableMeals;
