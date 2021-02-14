const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    photoLocation: {
        type: String,
    }
});

module.exports = mongoose.model('Фото проектов', projectsSchema)
