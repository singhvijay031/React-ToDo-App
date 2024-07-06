const toDoModel = require("../models/todo.models");

module.exports.getToDo = async (req, res) => {
  try {
    const toDo = await toDoModel.find();
    res.send(toDo);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  try {
    const data = await toDoModel.create({ text });
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    await toDoModel.findByIdAndUpdate(_id, { text });
    res.send("Updated Successfully...");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  try {
    await toDoModel.findByIdAndDelete(_id);
    res.send("Deleted Successfully...");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.toggleDoneToDo = async (req, res) => {
  const { _id } = req.body;
  try {
    const toDo = await toDoModel.findById(_id);
    if (!toDo) {
      return res.status(404).send("ToDo item not found");
    }

    toDo.done = !toDo.done;
    await toDo.save();

    // console.log(`Toggled done status for ToDo item ${_id}`);
    res.status(200).send("Toggled Done Status Successfully...");
  } catch (err) {
    // console.error("Error toggling done status:", err);
    res.status(500).send("Server error");
  }
};
