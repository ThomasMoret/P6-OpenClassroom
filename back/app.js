const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoDb = require("./mongoDB");

const app = express();

const usersRoutes = require("./routes/users");

app.use(cors());
app.use(express.json());

app.use("/api/auth", usersRoutes);

module.exports = app;
