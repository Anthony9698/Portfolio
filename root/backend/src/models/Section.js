const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateUploaded: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('Section', sectionSchema);