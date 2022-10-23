import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [pizzaToppings, setPizzaToppings] = useState(toppings);

  const handleNewSelect = (name, newSelect) => {
    const newPizzaToppings = [...pizzaToppings];
    let myIndex = newPizzaToppings.findIndex(obj => obj.name === name);
    newPizzaToppings[myIndex].selected = newSelect;
    setPizzaToppings(newPizzaToppings);
  }

  let toppingsAmount = 0;
  pizzaToppings.forEach(topping => {toppingsAmount += topping.selected})

  let totalPrice = 0;
  pizzaToppings.forEach(topping => {
    if (topping.selected) {
      totalPrice += topping.price;
    }
  })

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingsAmount}, total price: {totalPrice} Euro</p>

      <div className="toppings">
        {pizzaToppings.map((topping) => (
          <Topping topping={topping} key={topping.name} onSelect={(newSelect) => {handleNewSelect(topping.name, newSelect)}} />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
