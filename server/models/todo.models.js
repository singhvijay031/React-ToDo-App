const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;
