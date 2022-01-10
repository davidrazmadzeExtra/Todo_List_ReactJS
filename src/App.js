import React, { useState } from 'react';
import './App.css';

function App() {

  // State Hook - `useState`
  const [newItem, setNewItem] = useState("");

  // Helper Functions

  /* Adds a new item to the list array*/
  function addItem() {
    console.log(newItem);
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
