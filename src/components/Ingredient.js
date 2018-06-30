import React from 'react';

const Ingredient = ({ name, quantity, unit }) => {
  return (
    <li className="ingredient">
      {name} - {quantity} {unit}
    </li>
  );
};

export default Ingredient;
