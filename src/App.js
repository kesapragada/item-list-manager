import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">Add Item</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
