const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend started successfully ");
});

app.get("/about", (req, res) => {
  res.send("About backend learning");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
