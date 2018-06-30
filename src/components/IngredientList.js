import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, i) => (
        <Ingredient {...ingredient} key={i} />
      ))}
    </ul>
  );
};

export default IngredientList;
