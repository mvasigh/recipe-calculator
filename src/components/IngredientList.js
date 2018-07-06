import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientListItem from './IngredientListItem';

class IngredientList extends Component {
  render() {
    console.log(this.props.ingredients);
    return (
      <div className="ingredient-list">
        {this.props.ingredients.map((ingredient, i) => (
          <IngredientListItem {...ingredient} key={i} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ ingredients }) => ({ ingredients });

export default connect(mapStateToProps)(IngredientList);
