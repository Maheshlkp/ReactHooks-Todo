import './App.css';
import React, { useState } from "react";

function App () {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    // console.log(`this the the input value ${input}`)
    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Todolist</h1>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
          <button onClick={addTodo}>Add Todo</button>
        </form>

        <h2>List of todos</h2>
        {todos.map((todo) => (
          <p>{todo}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
