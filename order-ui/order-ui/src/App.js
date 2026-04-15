import React, { useState } from "react";
import axios from "axios";
import "./App.css";
 
function App() {
  const [items, setItems] = useState([
    { item: "", price: "" }
  ]);
 
  const [errors, setErrors] = useState("");
 
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
 
  const validate = () => {
    for (let i = 0; i < items.length; i++) {
      if (!items[i].item.trim()) {
        return "Item name cannot be empty";
      }
      if (!items[i].price || items[i].price <= 0) {
        return "Price must be greater than 0";
      }
    }
    return "";
  };
 
  const handleSubmit = async () => {
    const validationError = validate();
 
    if (validationError) {
      setErrors(validationError);
      return;
    }
 
    setErrors("");
 
    const data = {
      status: "CREATED",
      items: items.map((item) => ({
        item: item.item,
        price: parseFloat(item.price)
      }))
    };
 
    try {
      await axios.post("http://localhost:8080/orders", data);
 
      alert(" Order Created Successfully!");
 
      setItems([{ item: "", price: "" }]);
    } catch (error) {
      console.error(error);
      alert("Failed to save order");
    }
  };
 
  return (
    <div className="container">
      <h2> Order Management</h2>
 
      {errors && <p className="error">{errors}</p>}
 
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
 
        <tbody>
          {items.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  placeholder="Enter item"
                  value={row.item}
                  onChange={(e) =>
                    handleChange(index, "item", e.target.value)
                  }
                />
              </td>
 
              <td>
                <input
                  type="number"
                  placeholder="Enter price"
                  value={row.price}
                  onChange={(e) =>
                    handleChange(index, "price", e.target.value)
                  }
                />
              </td>
 
              <td>
                <button
                  className="delete-btn"
                  onClick={() => removeItem(index)}
                  disabled={items.length === 1}
                >
                  NO
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 
      <button className="add-btn" onClick={addItem}>
        ➕ Add Item
      </button>
 
      <button className="submit-btn" onClick={handleSubmit}>
        🚀 Submit Order
      </button>
    </div>
  );
}
 
export default App;