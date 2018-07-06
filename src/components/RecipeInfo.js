import React from 'react';
import RecipeTitle from './RecipeTitle';
import NutritionChart from './NutritionChart';
import NutritionFacts from './NutritionFacts';
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
      </CardContent>
      <NutritionChart />
      <CardContent>
        <NutritionFacts />
      </CardContent>
    </Card>
  );
};

export default RecipeInfo;
