import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './IngredientListItem.css';

const IngredientListItem = ({ name, quantity, unit }) => {
  return (
    <ListItem button className="IngredientListItem">
      <ListItemText primary={name} secondary={`${quantity} ${unit}`}>
        {name}
      </ListItemText>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default IngredientListItem;
