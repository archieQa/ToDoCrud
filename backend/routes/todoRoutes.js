// we create routes to do the crud app

const express = require("express");
const router = express.Router();

// we import first the todo model

const Todo = require("../models/Todo");

// POST route to create a new Todo item.

router.post("/todos", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET router to fetch all the todos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PATCH for updating the todos items by ID
router.patch("/todos/:id", async (req, res) => {
  const { name, isComplete, description } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { name, isComplete, description },
      { new: true }
    );
    if (!todo) {
      return res.status(404).send();
    }
    res.send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Deleting a todo by id

router.delete("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(401).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
