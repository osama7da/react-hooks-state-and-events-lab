import React, { useState } from "react";

function Item({ name, category }) { 
  const [cart , setCart] = useState(false) 

  function cartHandler (){ 
    setCart(!cart)

  }

  return (
    <li className={`${cart ? "in-cart" : ""}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartHandler} > {`${cart ? "Remove From Cart" : "Add To Cart"}`}  </button>
    </li>
  );
}

export default Item;
