const mongoose = require('mongoose');

const message = new mongoose.Schema({
    //name, number, message, otp, message status and date needed
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const messageModel = mongoose.model('message', message);
module.exports = messageModel;