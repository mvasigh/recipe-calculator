import React from 'react';

// consider turning into a stateful component to make updating 'select' tag options with units from API easier

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
    <form className="ingredient-input" onSubmit={handleSubmit}>
      <div>Add ingredient:</div>
      <input
        type="text"
        ref={input => (_name = input)}
        className="ingredient-input__name"
      />
      <input
        type="text"
        ref={input => (_quantity = input)}
        className="ingredient-input__quantity"
      />
      <select ref={select => (_unit = select)}>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <button>+</button>
    </form>
  );
};

export default IngredientInput;
