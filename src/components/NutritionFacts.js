import React, { Component } from 'react';
import {
  Grid,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Typography,
  Divider
} from '@material-ui/core';

class NutritionFacts extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="title">
            <strong>Nutrition Facts</strong>
          </Typography>
          <Typography variant="subtitle">8 servings per container</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    );
  }
}

export default NutritionFacts;
