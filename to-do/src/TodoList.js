import React, { useState } from "react";

// Simplified for brevity - inside the TodoList component or an individual TodoItem component

function TodoList({ todos, onDeleteTodo, onToggleComplete, onEditTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id} style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button onClick={() => onToggleComplete(todo)}>
              {todo.isComplete ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button
              onClick={() => onDeleteTodo(todo._id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
            <button onClick={() => onEditTodo(todo)}>
              {todo.isComplete ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button
              onClick={() => onEditTodo(todo._id)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <span
              style={{
                marginLeft: "auto",
                textDecoration: todo.isComplete ? "line-through" : "none",
              }}
            >
              {todo.name}
            </span>
          </div>
          <div style={{ textAlign: "right" }}>{todo.description}</div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
