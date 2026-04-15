import React, { useState } from "react";
import axios from "axios";
import "./App.css";
 
function App() {
  const [items, setItems] = useState([{ item: "", price: "" }]);
  const [response, setResponse] = useState("");
 
  const handleChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };
 
  const addItem = () => {
    setItems([...items, { item: "", price: "" }]);
  };
 
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };
 
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8080/orders", {
        items: items.map((i) => ({
          item: i.item,
          price: parseFloat(i.price),
        })),
      });
 
      setResponse("Order Created with ID: " + res.data.id);
    } catch (error) {
      console.error(error);
      setResponse("Error creating order");
    }
  };
 
  return (
    <div className="container">
      <h2>🛒 Order Form</h2>
 
      {items.map((item, index) => (
        <div className="row" key={index}>
          <input
            type="text"
            placeholder="Item Name"
            value={item.item}
            onChange={(e) =>
              handleChange(index, "item", e.target.value)
            }
          />
 
          <input
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(e) =>
              handleChange(index, "price", e.target.value)
            }
          />
 
          <button className="remove" onClick={() => removeItem(index)}>
            NO
          </button>
        </div>
      ))}
 
      <button className="add" onClick={addItem}>
         Add Item
      </button>
 
      <button className="submit" onClick={handleSubmit}>
        Submit Order
      </button>
 
      {response && <h3 className="response">{response}</h3>}
    </div>
  );
}
 
export default App;
 