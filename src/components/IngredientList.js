import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientListItem from './IngredientListItem';
import { List } from 'rmwc/List';

class IngredientList extends Component {
  render() {
    console.log(this.props.ingredients);
    return (
      <List className="ingredient-list">
        {this.props.ingredients.map((ingredient, i) => (
          <IngredientListItem {...ingredient} key={i} />
        ))}
      </List>
    );
  }
}

const mapStateToProps = ({ ingredients }) => ({ ingredients });

export default connect(mapStateToProps)(IngredientList);
