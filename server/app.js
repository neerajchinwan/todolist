const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/authRouter');
const taskRouter = require('./routes/taskRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', authRouter);
app.use('/api/v1/tasks', taskRouter);

module.exports = app;