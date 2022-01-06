const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// environment variables
dotenv.config();

// App and Port
const PORT = process.env.PORT || 8080;
const app = express();

//middleware
app.use(express.static("public"));

//view engine
app.set("view engine", "ejs");

// connect db
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWD}@mongo.jynjm.mongodb.net/${process.env.MONGO_DB}`;

mongoose
  .connect(dbURI)
  .then((_) => {
    console.log("Connected to DB");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => res.render("home"));
app.get("/post", (req, res) => res.render("post"));
