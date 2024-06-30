const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
  toggleDoneToDo,
} = require("../controllers/todo.controllers");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);
router.post("/toggle", toggleDoneToDo);

module.exports = router;
