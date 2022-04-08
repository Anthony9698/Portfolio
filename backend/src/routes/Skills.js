const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// Get all skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getSkill(req, res, next) {
    let skill;
    try {
        skill = await Skill.findById(req.params.id);
        if (skill == null) {
            return res.status(404).json({ message: 'Cannot find skill' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.skill = skill;
    next();
}

// Getting one
router.get('/:id', getSkill, (req, res) => {
    res.send(res.skill);
});

module.exports = router;