const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
    console.log("Hello");
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Creating one
router.post('/', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        summary: req.body.summary,
        description: req.body.description,
        tags: req.body.tags
    });
    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;