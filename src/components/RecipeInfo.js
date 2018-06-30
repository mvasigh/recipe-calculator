import React from 'react';
import RecipeTitle from './RecipeTitle';
import RecipeServings from './RecipeServings';
import RecipeNutrients from './RecipeNutrients';

const RecipeInfo = () => {
  return (
    <div className="recipe-info">
      <RecipeTitle />
      <RecipeServings />
      <RecipeNutrients />
    </div>
  );
};

export default RecipeInfo;
