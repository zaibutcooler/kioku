const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todolistController");

router.use(express.json());

// GET all todos
router.get("/", todoController.getAllTodos);

// GET a single todo by ID
router.get("/:id", todoController.getOneTodo);

// CREATE a new todo
router.post("/", todoController.createTodo);

// UPDATE a todo by ID
router.patch("/:id", todoController.updateTodo);

// DELETE a todo by ID
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
