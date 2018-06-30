import React, { Component } from 'react';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <RecipeInfo />
        <RecipeIngredients
          ingredients={this.state.ingredients}
          onIngredientInput={this.handleIngredientInput}
        />
      </div>
    );
  }
}

export default App;
