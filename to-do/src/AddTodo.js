import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, isComplete: false }),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddTodo(data);
        setName("");
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
