import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then(setTodos)
      .catch(console.error);
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    fetch("api/todos/${id}", {
      method: "DELETE",
    })
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch(console.error);
  };

  const toggleComplete = (todo) => {
    fetch(`/api/todos/${todo._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isComplete: !todo.isComplete }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        setTodos(
          todos.map((todo) =>
            todo._id === updatedTodo._id ? updatedTodo : todo
          )
        );
      })
      .catch(console.error);
  };

  const editTodo = (id, updatedTodo) => {
    fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(
          todos.map((todo) => (todo._id === id ? { ...todo, ...data } : todo))
        );
      })
      .catch(console.error);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleComplete={toggleComplete}
        onEditTodo={editTodo}
      />
    </div>
  );
}

export default App;
