const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');

app.use(express.json());
app.use('/tasks', tasksRouter);



app.get('/', (req, res) => {
  res.json({ message: "DevOps Task Manager API is running (lab 1)" });
});


app.listen(3000, () => console.log("welcome from feature branch! DevOps Task Manager API is running on port 3000"));
