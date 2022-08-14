const dotenv = require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoDb = require("./middleware/mongoDb");
const path = require("path");

const app = express();

const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

app.use(express.json());
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
