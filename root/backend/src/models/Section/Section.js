const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
    home: {
        title: {
            type: String,
            required: true,
        },
        greeting: {
            type: String,
            required: true
        }
    },
    about: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        skills: [{ 
            name: String,
            confidence: Number
        }]
    },
    projects: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    contact: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Section', sectionSchema);