require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', error => console.log('Connected to Database'));
db.once('open', () => console.log('Connected to Database...'));
app.use(express.json());

const sectionsRouter = require('./routes/Sections');
const projectsRouter = require('./routes/Projects');
const skillsRouter = require('./routes/Skills');

app.use('/sections', sectionsRouter);
app.use('/projects', projectsRouter);
app.use('/skills', skillsRouter);

app.listen(3001, console.log("Listening on port 3001..."));