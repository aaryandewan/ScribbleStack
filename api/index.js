require("dotenv").config({ path: "../.env" });
const User = require("./models/user");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());
let passw = process.env.MONGODB_PASSWORD;
mongoose
  .connect(
    "mongodb+srv://aaryan:" +
      passw +
      "@cluster0.ldq41v4.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({
    username,
    password,
  });

  newUser
    .save()
    .then((savedUser) => {
      res.json({ success: true, user: savedUser });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      res.status(500).json({ success: false, error: "Failed to create user" });
    });
});

const PORT = 5000; // Change it to the desired port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
