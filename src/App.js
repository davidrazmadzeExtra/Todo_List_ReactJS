import React, { useState } from 'react';
import './App.css';

function App() {

  // State Hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Helper Functions

  /* Adds a new item to the list array*/
  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    // Add new item to items array
    setItems(oldList => [...oldList, item]);

    console.log(items);

    // Reset newItem back to original state
    setNewItem("");
  }

  // Main part of app
  return (
    <div className="app">
      {/* 1. Header  */}
      <h1>My Todo List</h1>

      {/* 2. Add new item (input) */}
      <input 
        type='text'
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />

      {/* Add (button) */}
      <button onClick={() => addItem()}>
        Add
      </button>

      {/* 3. List of todos (unordered list) */}
      <ul>
        <li>Take out trash <button>x </button> </li>
        <li>Mow the lawn</li>
        <li>Grocery shopping</li>
      </ul>

    </div>
  );
}

export default App;
