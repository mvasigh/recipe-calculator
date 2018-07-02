import React from 'react';
import { TextField } from 'rmwc/TextField';
import './RecipeServings.css';

const RecipeServings = ({ servings }) => {
  return (
    <div className="RecipeServings">
      <TextField label="Serves:" value={servings} />
    </div>
  );
};

export default RecipeServings;
