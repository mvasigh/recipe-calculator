import React from 'react';
import RecipeTitle from './RecipeTitle';
import RecipeServings from './RecipeServings';
import RecipeNutrients from './RecipeNutrients';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './RecipeInfo.css';
import { TextField } from '@material-ui/core';

const RecipeInfo = () => {
  return (
    <Card className="RecipeInfo">
      <Typography variant="title">Recipe Calculator</Typography>
      <RecipeTitle fullWidth />
      <TextField label="Serves:" />
      <RecipeNutrients />
    </Card>
  );
};

export default RecipeInfo;
