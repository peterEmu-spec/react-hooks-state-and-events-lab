import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory]=useState ("All")
  function handleCategoryChange(e){
    setSelectedCategory(e.target.value)
  }
  const itemsToDislpay=items.filter((item)=>{
    if(selectedCategory === "All")return true;
    return item.category=== selectedCategory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDislpay.map((item) => (
          <Item key={item.id} name={item.category} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
