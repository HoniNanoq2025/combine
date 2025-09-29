const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(cors());

let items = [];

// POST
app.post("/items", (req, res) => {
  const { name, description } = req.body;
  const newItem = { id: items.length + 1, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

//READ: hent hele listen
app.get("/items", (req, res) => {
  res.json(items);
});

// READ: Hent enkelt item
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));

  if (!item) return res.status(404).json({ messsage: "Item ikke fundet" });

  res.json(item);
});

//UPDATE
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return req.status(404).json({ message: "Item ikke fundet" });
  const { name, description } = req.body;

  if (name) item.name = name;
  if (description) item.description = description;

  res.json(item);
});

//DELETE
app.delete("/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));

  if (index === -1)
    return res.status(404).json({ message: "Item ikke fundet" });

  items.slice(index, 1);

  res.json({ message: "Item slettet" });
});

app.listen(PORT, () => {
  console.log(`Serveren kører på http://localhost:${PORT}`);
});
