import React, { useState } from "react";
import axios from "axios";
 
function App() {
  const [items, setItems] = useState([{ item: "", price: "" }]);
  const [orderId, setOrderId] = useState(null);
 
  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };
 
  const addItem = () => {
    setItems([...items, { item: "", price: "" }]);
  };
 
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8080/orders", {
      items: items,
    });
    setOrderId(response.data.id);
  };
 
  return (
    <div>
      <h1>Order Form</h1>
 
      {items.map((item, index) => (
        <div key={index}>
          <input
            placeholder="Item"
            value={item.item}
            onChange={(e) =>
              handleChange(index, "item", e.target.value)
            }
          />
          <input
            placeholder="Price"
            value={item.price}
            onChange={(e) =>
              handleChange(index, "price", e.target.value)
            }
          />
        </div>
      ))}
 
      <button onClick={addItem}>Add Item</button>
      <button onClick={handleSubmit}>Submit</button>
 
      {orderId && <p>Order ID: {orderId}</p>}
    </div>
  );
}
 
export default App;
 