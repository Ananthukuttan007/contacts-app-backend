const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    //just name and number is received for contact !
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    }
})

const contactModel = mongoose.model('contact', contact);
module.exports = contactModel;