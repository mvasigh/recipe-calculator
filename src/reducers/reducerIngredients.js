import { ADD_INGREDIENT } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
