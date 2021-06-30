import React from 'react';
import Card from '../Card/Card';
import styles from './AvailableMeals.module.css';
import DUMMY_MEALS from './dummyMeals';
import MealItem from './MealItem/MealItem';

function AvailableMeals(props) {
  const onSendMealHandler = function (meal) {
    props.onSendMeal(meal);
  };

  return (
    <Card style={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal, index) => (
          <MealItem
            name={meal.name}
            description={meal.description}
            price={meal.price}
            key={index}
            onSendAmount={props.onSendAmount}
            onSendMeal={onSendMealHandler}
            id={index}
          />
        ))}
      </ul>
    </Card>
  );
}

export default AvailableMeals;
