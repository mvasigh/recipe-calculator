import React, { Component } from 'react';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: ''
      },
      ingredients: [
        {
          name: 'Ingredient 1',
          quantity: 2,
          unit: 'cups'
        }
      ]
    };
    this.handleIngredientInput = this.handleIngredientInput.bind(this);
  }

  handleIngredientInput(ingredient) {
    this.setState({ ingredients: [...this.state.ingredients, ingredient] });
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <RecipeInfo title={this.state.recipe.title} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RecipeIngredients
              ingredients={this.state.ingredients}
              onIngredientInput={this.handleIngredientInput}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
