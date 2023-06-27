const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  // Here, you can perform the necessary logic to register the user
  // For simplicity, let's just return a success message with the registered user's data
  const registeredUser = {
    username,
    password,
  };

  res.json({ success: true, user: registeredUser });
});

const PORT = 5000; // Change it to the desired port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
