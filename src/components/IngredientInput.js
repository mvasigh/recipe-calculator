import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addIngredient } from '../actions/addIngredient';
import axios from 'axios';
import _ from 'lodash';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './IngredientInput.css';

const API_KEY = 'lk6yLvVz69xE4NB616AtuEOz5t8DrVo9yX48AgWP';
const API_URL = `https://api.nal.usda.gov/ndb/search/?format=json&sort=n&max=25&api_key=${API_KEY}`;

class IngredientInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      unit: '',
      suggestions: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchFoodSuggestions = this.fetchFoodSuggestions.bind(this);
    this.fetchFoodSuggestionsThrottled = _.debounce(
      this.fetchFoodSuggestions,
      300
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addIngredient(this.state);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'name') {
      this.fetchFoodSuggestionsThrottled();
    }
  }

  fetchFoodSuggestions() {
    const url = API_URL + '&q=' + encodeURIComponent(this.state.name);
    axios.get(url).then(response => {
      if (response.data.list.item != undefined) {
        console.log(response.data.list.item);
        this.setState({ suggestions: response.data.list.item });
      }
    });
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
