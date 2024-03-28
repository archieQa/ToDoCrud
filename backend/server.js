const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");

const uri =
  "mongodb+srv://Luars:Luars@todocluster.e9bpcio.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster";

const app = express();

app.use(bodyParser.json());
app.use("/api", todoRoutes);

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server stared on port 8000");
});
