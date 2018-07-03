import React from 'react';
import IngredientInput from './IngredientInput';
import IngredientList from './IngredientList';
import Card from '@material-ui/core/Card';
import './RecipeIngredients.css';

const RecipeIngredients = ({
  ingredients = [],
  onIngredientInput = f => f
}) => {
  return (
    <Card className="RecipeIngredients">
      <IngredientInput onIngredientInput={onIngredientInput} />
      <IngredientList ingredients={ingredients} />
    </Card>
  );
};

export default RecipeIngredients;
