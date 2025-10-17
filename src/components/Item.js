import React, { useState } from "react";

function Item({ name, price }) {
  
  const [inCart, setInCart] = useState(false);

 
  function handleAddToCart() {
  
    setInCart((prevState) => !prevState);
  }

  
  const liClass = inCart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>
        {name} - ${price}
      </span>
      <button onClick={handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
