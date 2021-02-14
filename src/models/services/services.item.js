const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    price: {
        type: Number,
    },
    edenica: {
      type: String,
    },
    photoLocation: {
        type: String,
    }
});

module.exports = mongoose.model('Сервис', projectsSchema)
