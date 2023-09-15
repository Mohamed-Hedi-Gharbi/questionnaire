const mongoose = require('mongoose');


const verifeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    numberOfAttempts: {
        type: Number,
        default: 0
    },

    ip: {
        type: String
    }
}, { timestamps: true });


module.exports = mongoose.model('verification_code', verifeSchema);
