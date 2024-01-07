const { Schema, model } = require("mongoose");

const Todo = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },

    status: { type: String, required: true, default: "Ожидает Выполнения" },
});

module.exports = model("Todo", Todo);
