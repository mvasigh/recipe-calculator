import { ADD_INGREDIENT } from './types';

export const addIngredient = ingredient => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient
  };
};
