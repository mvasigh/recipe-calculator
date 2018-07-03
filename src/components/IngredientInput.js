import React, { Component } from 'react';
import IngredientInputField from './IngredientInputField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './IngredientInput.css';

// consider turning into a stateful component to make updating 'select' tag options with units from API easier

class IngredientInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="IngredientInput">
        <Grid container alignItems="baseline" spacing={24}>
          <Grid item xs={12}>
            <Typography variant="subheading">Add ingredient:</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth placeholder="Ingredient name" />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth placeholder="Quantity" />
          </Grid>
          <Grid item xs={3}>
            <FormControl>
              <InputLabel>Unit</InputLabel>
              <Select
                inputProps={{
                  name: 'age',
                  id: 'age-simple'
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <Button variant="outlined">Add</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// const IngredientInput = ({ onIngredientInput = f => f }) => {
//   let _name, _quantity, _unit;
//   const handleSubmit = e => {
//     e.preventDefault();
//     const ingredient = {
//       name: _name.value,
//       quantity: _quantity.value,
//       unit: _unit.value
//     };
//     onIngredientInput(ingredient);
//   };
//   return (
//     <form className="IngredientInput" onSubmit={handleSubmit}>
//       <Typography className="IngredientInput__heading" use="subtitle2">
//         Add ingredient:
//       </Typography>
//       <IngredientInputField
//         ref={input => (_name = input)}
//         label="Ingredient"
//         type="text"
//         fullWidth
//       />
//       <div className="IngredientInput__row">
//         <IngredientInputField
//           ref={input => (_quantity = input)}
//           label="Quantity"
//           type="text"
//         />
//         <Select
//           box
//           label="Unit"
//           ref={select => (_unit = select)}
//           options={['one', 'two', 'three']}
//         />
//         <Button>Add</Button>
//       </div>
//       {/* <select ref={select => (_unit = select)}>
//         <option>Option 1</option>
//         <option>Option 2</option>
//       </select> */}
//     </form>
//   );
// };

export default IngredientInput;
