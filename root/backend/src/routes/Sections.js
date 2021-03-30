const express = require('express');
const router = express.Router();
const Section = require('../models/Section');

// Get all sections
router.get('/', async (req, res) => {
    try {
        let sections;
        let queryParams = req.query;
        if (queryParams.name) {
            sections = await Section.findOne({ name: queryParams.name, current: true });
        } else {
            sections = await Section.find();
        }
        res.json(sections);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getSection(req, res, next) {
    let section;
    try {
        section = await Section.findById(req.params.id);
        if (!section) {
            return res.status(404).json({ message: 'Cannot find section' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.section = section;
    next();
}

// Getting one by id
router.get('/:id', getSection, (req, res) => {
    res.send(res.section);
});

module.exports = router;