const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("assignment 10");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = chefs.find((chef) => chef.id === parseInt(id));
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`assignment 10 start on: ${port}`);
});
