const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Get all profiles
router.get('/', async (req, res) => {
    try {
        let profiles;
        let queryParams = req.query;
        if (queryParams.name) {
            profiles = await Profile.findOne({ current: true });
        } else {
            profiles = await Profile.find();
        }
        res.json(profiles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getProfile(req, res, next) {
    let profile;
    try {
        profile = await Profile.findById(req.params.id);
        if (profile == null) {
            return res.status(404).json({ message: 'Cannot find profile' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.profile = profile;
    next();
}

// Getting one
router.get('/:id', getProfile, (req, res) => {
    res.send(res.profile);
});

module.exports = router;