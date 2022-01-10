import './App.css';

function App() {
  return (
    <div className="app">
      {/* 1. Header  */}
      <h1>My Todo List</h1>

      {/* 2. Add new item (input) */}
      <input 
        type='text'
        placeholder='Add an item...'
      />

      {/* Add (button) */}
      <button>
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
