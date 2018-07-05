import React from 'react';
import IngredientInput from './IngredientInput';
import IngredientList from './IngredientList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './RecipeIngredients.css';

const RecipeIngredients = ({
  ingredients = [],
  onIngredientInput = f => f
}) => {
  return (
    <Card className="RecipeIngredients">
      <CardContent>
        <IngredientInput onIngredientInput={onIngredientInput} />
        <IngredientList ingredients={ingredients} />
    </CardContent>
    </Card>
  );
};

export default RecipeIngredients;
