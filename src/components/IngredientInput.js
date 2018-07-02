import React, { Component } from 'react';
import { Typography } from 'rmwc/Typography';
import IngredientInputField from './IngredientInputField';
import { Select } from 'rmwc/Select';
import Button from '@material/react-button';
import './IngredientInput.css';

// consider turning into a stateful component to make updating 'select' tag options with units from API easier

// class IngredientInput extends Component {
//   constructor(props) {
//     super(props);
//     this.
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//   }

//   render() {

//   }
// }

const IngredientInput = ({ onIngredientInput = f => f }) => {
  let _name, _quantity, _unit;
  const handleSubmit = e => {
    e.preventDefault();
    const ingredient = {
      name: _name.value,
      quantity: _quantity.value,
      unit: _unit.value
    };
    onIngredientInput(ingredient);
  };
  return (
    <form className="IngredientInput" onSubmit={handleSubmit}>
      <Typography className="IngredientInput__heading" use="subtitle2">
        Add ingredient:
      </Typography>
      <IngredientInputField
        ref={input => (_name = input)}
        label="Ingredient"
        type="text"
        fullWidth
      />
      <div className="IngredientInput__row">
        <IngredientInputField
          ref={input => (_quantity = input)}
          label="Quantity"
          type="text"
        />
        <Select
          box
          label="Unit"
          ref={select => (_unit = select)}
          options={['one', 'two', 'three']}
        />
        <Button>Add</Button>
      </div>
      {/* <select ref={select => (_unit = select)}>
        <option>Option 1</option>
        <option>Option 2</option>
      </select> */}
    </form>
  );
};

export default IngredientInput;
