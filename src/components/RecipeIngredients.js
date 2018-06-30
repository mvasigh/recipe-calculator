import React from 'react';
import IngredientInput from './IngredientInput';
import IngredientList from './IngredientList';

const RecipeIngredients = ({
  ingredients = [],
  onIngredientInput = f => f
}) => {
  return (
    <div className="recipe-ingredients">
      <IngredientInput onIngredientInput={onIngredientInput} />
      <IngredientList ingredients={ingredients} />
    </div>
  );
};

export default RecipeIngredients;
