const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const alunos = require("./routes/alunos");

app.use(bodyParser.urlencoded());

app.use("/aluno", alunos);

app.get("/", (req, res) => {
  res.send("hello world!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
