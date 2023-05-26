const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todolistController");

// GET all todos
router.get("/todos", todoController.getAllTodos);

// GET a single todo by ID
router.get("/todos/:id", todoController.getOneTodo);

// CREATE a new todo
router.post("/todos", todoController.createTodo);

// UPDATE a todo by ID
router.put("/todos/:id", todoController.updateTodo);

// DELETE a todo by ID
router.delete("/todos/:id", todoController.deleteTodo);

module.exports = router;
