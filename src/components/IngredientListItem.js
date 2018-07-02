import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryText,
  ListItemMeta
} from 'rmwc/List';
import './IngredientListItem.css';

const IngredientListItem = ({ name, quantity, unit }) => {
  return (
    <ListItem className="IngredientListItem">
      <ListItemMeta
        className="IngredientListItem__meta"
        onClick={() => console.log('hello world')}
      >
        cancel
      </ListItemMeta>

      <div className="IngredientListItem__body">
        <ListItemText className="IngredientListItem__text">{name}</ListItemText>
        <ListItemSecondaryText>{`${quantity} ${unit}`}</ListItemSecondaryText>
      </div>
    </ListItem>
  );
};

export default IngredientListItem;
