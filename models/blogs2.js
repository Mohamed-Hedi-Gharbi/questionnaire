const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blocSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    q1: {
        type: String,
        required: true,
    },
    q2: {
        type: String,
        required: true,
    },
    q3: {
        type: String,
        required: true,
    },
    q4: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true
    }
});


const Blog2 = mongoose.model('Blog', blocSchema);
module.exports = Blog2;