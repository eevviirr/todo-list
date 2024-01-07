require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", routes);

const start = () => {
    try {
        mongoose.connect("mongodb://mongo:27017/todo-list", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(8000, () => console.log("listening on port " + 8000));
    } catch (error) {
        console.log(error);
    }
};

start();
