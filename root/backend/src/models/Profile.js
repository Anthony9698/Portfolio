const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    current: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Profile', profileSchema);