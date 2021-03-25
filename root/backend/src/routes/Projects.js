const express = require('express');
const router = express.Router();
const Project = require('../models/Project/Project');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one
router.get('/:id', getProject, (req, res) => {
    res.send(res.project);
});

async function getProject(req, res, next) {
    let project;
    try {
        project = await Project.findById(req.params.id);
        if (project == null) {
            return res.status(404).json({ message: 'Cannot find project' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.project = project;
    next();
}

module.exports = router;