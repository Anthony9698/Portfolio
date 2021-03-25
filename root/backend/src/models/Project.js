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
        type: Array,
        required: true
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