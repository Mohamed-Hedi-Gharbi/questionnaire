const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blocSchema = new Schema({
    q: {
        type: String,
    },
});


const CorreCS = mongoose.model('CorreCS', blocSchema);
module.exports = CorreCS; 