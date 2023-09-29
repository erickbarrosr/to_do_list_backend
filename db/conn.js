require("dotenv").config();
const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.nflkarp.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("CONNECTED DB!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
