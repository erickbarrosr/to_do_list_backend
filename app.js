const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");

const app = express();
conn();

app.use(express.json());
app.use(cors());

app.listen(3000, (req, res) => {
  console.log("CONNECTED SERVER!");
});
