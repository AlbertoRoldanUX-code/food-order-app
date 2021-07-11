import React from 'react';
import Card from '../Card/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

function AvailableMeals() {
  return (
    <Card style={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal, index) => (
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
