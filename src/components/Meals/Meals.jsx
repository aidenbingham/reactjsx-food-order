import { Fragment } from 'react';

import MealsSummary from './MealsSummary.jsx';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
