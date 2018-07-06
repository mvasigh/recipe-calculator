import React, { Component } from 'react';
import {
  Grid,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Typography,
  Divider,
  Paper
} from '@material-ui/core';

class NutritionFacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Typography variant="title">
              <strong>Nutrition Facts</strong>
            </Typography>
            <Typography variant="subheading">8 total servings</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subheading">
              <strong>Calories</strong> 200
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default NutritionFacts;
