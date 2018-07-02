import React, { Component } from 'react';
import TextField, { HelperText, Input } from '@material/react-text-field';
import './IngredientInputField.css';

class IngredientInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      placeholder: props.placeholder,
      label: props.label,
      fullWidth: props.fullWidth || false,
      helperText: props.helperText
    };
  }

  render() {
    const { label, placeholder, value, helperText, fullWidth } = this.state;
    return (
      <div>
        <TextField
          outlined
          label={label}
          HelperText={<HelperText>{helperText}</HelperText>}
          className={`mdc-text-field IngredientInputField ${
            fullWidth ? 'IngredientInputField--fullWidth' : ''
          }`}
        >
          <Input
            value={value}
            placeholder={placeholder}
            onChange={e =>
              this.setState({ ...this.state, value: e.target.value })
            }
          />
        </TextField>
      </div>
    );
  }
}

export default IngredientInputField;
