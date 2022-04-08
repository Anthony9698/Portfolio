const mongoose = require('mongoose');
const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    confidence: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Skill', skillSchema);