const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        validate: v => Array.isArray(v) && v.length > 0,
    },
    url: {
        type: String,
        required: false
    },
    imageAlbum: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Project', projectSchema);