import React, { Component } from 'react';
import TextField, { HelperText, Input } from '@material/react-text-field';
import './RecipeTitle.css';

class RecipeTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.title || '',
      fullWidth: props.fullWidth || false
    };
  }

  render() {
    return (
      <div className="RecipeTitle">
        <TextField
          className={`mdc-text-field RecipeTitle__field ${
            this.state.fullWidth ? 'RecipeTitle--fullwidth' : ''
          }`}
          label=""
        >
          <Input
            className="RecipeTitle__input"
            placeholder="Recipe title..."
            value={this.state.value}
            onChange={e =>
              this.setState({
                value: e.target.value
              })
            }
          />
        </TextField>
      </div>
    );
  }
}

export default RecipeTitle;
