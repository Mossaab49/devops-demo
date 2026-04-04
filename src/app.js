const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');

app.use(express.json());
app.use('/tasks', tasksRouter);



app.get('/', (req, res) => {
  res.json({ message: "DevOps Task Manager API is running (lab 1)" });
});

// CI test change 
console.log("Testing CI with a Pull Request");

app.listen(3000, () => console.log("Welcome to main branch! DevOps Task Manager API is running on port 3000"));
