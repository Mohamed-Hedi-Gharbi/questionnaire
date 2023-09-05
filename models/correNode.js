const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blocSchema = new Schema({
    q: {
        type: String,
    },
});


const CorreNodeJS = mongoose.model('CorreNodeJS', blocSchema);
module.exports = CorreNodeJS; 