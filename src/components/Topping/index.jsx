import React, { useState } from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, onSelect }) => {

  const handleChange = () => {
    onSelect(!topping.selected);
  }

  return (
    <div className="topping">
      <Check checked={topping.selected} vegan={topping.vegan} onChange={handleChange}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
