const { Router } = require("express");
const router = Router();
const TodoControllers = require("../controllers/todoControllers");

router.post("/add", TodoControllers.addTodo);
router.patch("/edit/:id", TodoControllers.editTodo);
router.delete("/delete/:id", TodoControllers.deleteTodo);
router.get("/", TodoControllers.getTodo);
router.get("/search", TodoControllers.getTodoByWord);
router.get("/:id", TodoControllers.getTodoById);

module.exports = router;
