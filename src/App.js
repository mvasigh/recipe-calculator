import React, { Component } from 'react';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import { Grid, GridCell } from 'rmwc/Grid';
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
        <Grid>
          <GridCell span="6">
            <RecipeInfo title={this.state.recipe.title} />
          </GridCell>
          <GridCell span="6">
            <RecipeIngredients
              ingredients={this.state.ingredients}
              onIngredientInput={this.handleIngredientInput}
            />
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default App;
