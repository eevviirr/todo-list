const Todo = require("../model/todoModel");

class TodoControllers {
    async addTodo(req, res) {
        try {
            const { title, description, status } = req.body;

            if (!title || !description) {
                res.status(400).json({
                    message: "Заголовок и описание обязательно",
                });
            }
            const newTodo = await Todo.create({ title, description, status });
            await newTodo.save();
            res.status(200).json({ message: "Задача добавлена" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Ошибка при добавлении задачи" });
        }
    }

    async editTodo(req, res) {
        try {
            const { title, description, status } = req.body;
            const { id } = req.params;
            await Todo.findByIdAndUpdate(
                id,
                {
                    title,
                    description,
                    status,
                },
                { new: true }
            );

            res.status(200).json({ message: "Задача обновлена" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Ошибка при обновлении задачи" });
        }
    }

    async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            await Todo.findByIdAndDelete(id);

            res.status(200).json({ message: "Задача удалена" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Ошибка при удалении задачи" });
        }
    }

    async getTodo(req, res) {
        try {
            const todos = await Todo.find();
            res.status(200).json(todos);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Ошибка при получении задач" });
        }
    }

    async getTodoById(req, res) {
        try {
            const { id } = req.params;
            const todo = await Todo.findById(id);
            if (!todo) {
                return res.status(404).json({ message: "Задача не найдена" });
            }
            res.status(200).json(todo);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Ошибка при получении задач" });
        }
    }

    async getTodoByWord(req, res) {
        try {
            const { s } = req.query;

            if (!s) {
                const todo = await Todo.find();
                if (!todo.length) {
                    return res
                        .status(404)
                        .json({ message: "Такой задачи нет" });
                }
                res.status(200).json(todo);
            } else {
                const todo = await Todo.find({
                    title: { $regex: s, $options: "i" },
                });
                if (!todo) {
                    return res
                        .status(404)
                        .json({ message: "Такой задачи нет" });
                }
                res.status(200).json(todo);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Ошибка при получении задач" });
        }
    }
}

module.exports = new TodoControllers();
