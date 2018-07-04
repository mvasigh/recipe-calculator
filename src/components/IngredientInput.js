import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addIngredient } from '../actions/addIngredient';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './IngredientInput.css';

class IngredientInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      unit: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addIngredient(this.state);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, quantity, unit } = this.state;

    return (
      <form className="IngredientInput" onSubmit={this.handleSubmit}>
        <Grid container alignItems="baseline" spacing={24}>
          <Grid item xs={12}>
            <Typography variant="subheading">Add ingredient:</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              fullWidth
              placeholder="Ingredient name"
              value={name}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="quantity"
              type="number"
              min={0}
              fullWidth
              placeholder="Quantity"
              value={quantity}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl>
              <InputLabel>Unit</InputLabel>
              <Select name="unit" value={unit} onChange={this.handleChange}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="cups">cups</MenuItem>
                <MenuItem value="servings">Servings</MenuItem>
                <MenuItem value="g">grams</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <Button type="submit" color="primary" variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addIngredient }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(IngredientInput);
