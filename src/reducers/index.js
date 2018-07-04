import { combineReducers } from 'redux';
import reducerIngredients from './reducerIngredients';

export default combineReducers({
  ingredients: reducerIngredients
});
