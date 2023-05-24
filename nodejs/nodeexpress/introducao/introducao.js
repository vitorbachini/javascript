const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let consoleBody = (req, res, next) => {
  console.log(req.body);
  next();
};

let hello = (req, res) => {
  res.send("hello world");
};

app.use('/', bodyParser.json());
app.get("/",consoleBody ,hello);

app.post("/",consoleBody ,hello);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
