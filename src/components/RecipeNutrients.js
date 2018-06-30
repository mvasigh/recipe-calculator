import React from 'react';
import NutrientChart from './NutrientChart';
import NutrientDetail from './NutrientDetail';

const RecipeNutrients = () => {
  return (
    <div className="recipe-nutrients">
      <NutrientChart />
      <NutrientDetail />
    </div>
  );
};

export default RecipeNutrients;
