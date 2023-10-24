const express = require("express");
const cors = require("cors");
const database = require("./db");

const app = express();
database();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

module.exports = app;
