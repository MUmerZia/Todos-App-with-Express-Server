import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

const todos = [];

app.use(express.json());
app.use(cors());

app.post("/todo", (req, res) => {
  console.log("--------->", req.body);
  todos.push(req.body.text);

  res.send({
    message: "Todo added",
    data: todos,
  });
});

app.get("/todos", (req, res) => {
  console.log("todos--------->", todos);
  console.log(`${req.ip} asking for all todos`);
  res.send({
    message: "here's your todos list!",
    data: todos,
  });
});

app.get("/", (req, res) => {
  console.log(`${req.ip} is offering for water,food and ice-cream`);
  res.send("Here's your water,food and ice-cream");
});
app.get("/water", (req, res) => {
  console.log(`${req.ip} is asking for water`);
  res.send("Here's some water to you!");
});
app.get("/food", (req, res) => {
  console.log(`${req.ip} is asking for food`);
  res.send("here's some food to you!");
});
app.get("/ice-cream", (req, res) => {
  console.log(`${req.ip} is asking for ice-cream`);
  res.send("here's your ice-cream!");
});
app.post("/pizza", (req, res) => {
  console.log(`${req.ip} is asking for pizza`);
  res.send("here's your pizza!");
});

app.listen(port, () => {
  console.log(`Server/Software app is listening on port ${port}`);
});
