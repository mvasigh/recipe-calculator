import React, { Component } from 'react';
import RecipeTitle from './RecipeTitle';
import NutritionChart from './NutritionChart';
import NutritionFacts from './NutritionFacts';
import { Card, CardContent, Typography, TextField } from '@material-ui/core';
import './RecipeInfo.css';

class RecipeInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card className="RecipeInfo">
          <CardContent>
            <Typography variant="title">Recipe Calculator</Typography>
            <RecipeTitle fullWidth />
            <TextField label="Serves:" />
          </CardContent>
        </Card>
        <NutritionChart />
        <NutritionFacts />
      </div>
    );
  }
}

export default RecipeInfo;
