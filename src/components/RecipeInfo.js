import React from 'react';
import RecipeTitle from './RecipeTitle';
import RecipeServings from './RecipeServings';
import RecipeNutrients from './RecipeNutrients';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './RecipeInfo.css';
import { TextField } from '@material-ui/core';

const RecipeInfo = () => {
  return (
    <Card className="RecipeInfo">
      <CardContent>
        <Typography variant="title">Recipe Calculator</Typography>
        <RecipeTitle fullWidth />
        <TextField label="Serves:" />
        <RecipeNutrients />
      </CardContent>
    </Card>
  );
};

export default RecipeInfo;
