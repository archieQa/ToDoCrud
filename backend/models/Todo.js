const mongoose = require("mongoose");

// schema for my todo

const TodoSchema = new mongoose.Schema({
  name: String,
  isComplete: Boolean,
  description: {
    type: String,
    default: "",
  },
});

// model for todo items using the schema

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
