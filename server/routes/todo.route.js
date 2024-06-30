const { Router } = require("express");
const { getToDo, saveToDo } = require("../controllers/todo.controllers");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);

module.exports = router;
