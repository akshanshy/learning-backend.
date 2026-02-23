const express = require('express'); 
const app = express();

// 1. home route
app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

// 2. student JSON route
app.get("/student", (req, res) => {
  res.json({
    name: "Akshansh",
    branch: "ENTC",
    college: "AIT"
  });
});

// 3. sum route  /sum?a=5&b=10
app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  const sum = a + b;

  res.json({
    sum: sum
  });
});

// 4. dynamic route
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});