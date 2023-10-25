const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  initialDate: { type: Date, default: Date.now() },
  finalDate: { type: Date, default: Date.now() },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
