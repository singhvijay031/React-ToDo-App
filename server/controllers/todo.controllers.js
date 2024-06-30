const toDoModel = require("../models/todo.models");

module.exports.getToDo = async (req, res) => {
  const toDo = await toDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  toDoModel.create({ text }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  toDoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send("Updated Successfully...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  toDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("Deleted Successfully...");
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports.toggleDoneToDo = async (req, res) => {
  const { _id } = req.body;

  const toDo = await toDoModel.findById(_id);
  if (toDo) {
    toDo.done = !toDo.done;
    toDo.save()
      .then(() => {
        res.send("Toggled Done Status Successfully...");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.status(404).send("ToDo item not found");
  }
};
