import React from 'react';
import IngredientListItem from './IngredientListItem';
import { List } from 'rmwc/List';

const IngredientList = ({ ingredients }) => {
  return (
    <List className="ingredient-list">
      {ingredients.map((ingredient, i) => (
        <IngredientListItem {...ingredient} key={i} />
      ))}
    </List>
  );
};

export default IngredientList;
