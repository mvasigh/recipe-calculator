import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './RecipeTitle.css';

class RecipeTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      fullWidth: props.fullWidth || false
    };
  }

  handleChange = key => e => {
    this.setState({
      key: e.target.value
    });
  };

  render() {
    return (
      <div className="RecipeTitle">
        <TextField
          id="name"
          label="Recipe title..."
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
          fullWidth
        />
      </div>
    );
  }
}

export default RecipeTitle;
