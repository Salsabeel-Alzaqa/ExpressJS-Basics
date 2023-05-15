import { todos } from "./Data/todos";
const express = require('express');
const app = express();
const port = 3000;
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});
app.delete('/todos', (req, res) => {
  if (todos.length === 0) {
    res.status(422).json({ message: 'Empty there is nothing to delete' });
  } else {
    const random = Math.floor(Math.random() * todos.length);
    const deleteTodo = todos.splice(random, 1)[0];
    res.status(204).json({ message: 'Deleted', deleteTodo });
  }
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`open http://localhost:${port}`);
});
