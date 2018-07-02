import React from 'react';
import IngredientInput from './IngredientInput';
import IngredientList from './IngredientList';
import { Card, CardPrimaryAction } from 'rmwc/Card';
import { ListDivider } from 'rmwc/List';
import './RecipeIngredients.css';

const RecipeIngredients = ({
  ingredients = [],
  onIngredientInput = f => f
}) => {
  return (
    <Card outlined className="RecipeIngredients">
      <CardPrimaryAction style={{ padding: '0rem 1rem' }}>
        <h4>Ingredients</h4>
      </CardPrimaryAction>
      <ListDivider />
      <IngredientInput onIngredientInput={onIngredientInput} />
      <ListDivider />
      <IngredientList ingredients={ingredients} />
    </Card>
  );
};

export default RecipeIngredients;
