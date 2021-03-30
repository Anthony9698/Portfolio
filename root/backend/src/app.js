require('dotenv').config();
const contactEmail = require('./models/ContactEmail');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

contactEmail.verify(error => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send...");
    }
});

const db = mongoose.connection;
db.on('error', error => console.log('Connected to Database'));
db.once('open', () => console.log('Connected to Database...'));

const sectionsRouter = require('./routes/Sections');
const projectsRouter = require('./routes/Projects');
const skillsRouter = require('./routes/Skills');
const contactRouter = require('./routes/Contact');
const profileRouter = require('./routes/Profiles');

app.use(express.json());
app.use(cors());
app.use('/sections', sectionsRouter);
app.use('/projects', projectsRouter);
app.use('/skills', skillsRouter);
app.use('/contact', contactRouter);
app.use('/profiles', profileRouter);

app.listen(3001, console.log("Listening on port 3001..."));