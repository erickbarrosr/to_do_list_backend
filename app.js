const express = require("express");
const cors = require("cors");
const database = require("./db");
const router = require("./routes/router");

const app = express();
database();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api", router);

module.exports = app;
