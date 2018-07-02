import React from 'react';
import RecipeTitle from './RecipeTitle';
import RecipeServings from './RecipeServings';
import RecipeNutrients from './RecipeNutrients';
import { Card } from 'rmwc/Card';

const RecipeInfo = () => {
  return (
    <Card outlined className="RecipeInfo">
      <RecipeTitle fullWidth />
      <RecipeServings />
      <RecipeNutrients />
    </Card>
  );
};

export default RecipeInfo;
