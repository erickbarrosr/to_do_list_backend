const mongoose = require("mongoose");
require("dotenv").config();

async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nflkarp.mongodb.net/to-do-list`
    );

    console.log("Database successfully connected!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao conectar com o banco de dados." });
  }
}

module.exports = connectToDatabase;
