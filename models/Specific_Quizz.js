const mongoose = require('mongoose');
const Quizz = require('./Quizz');

const specificQuizzSchema = new mongoose.Schema({
  quizz: {
    type: Quizz.schema,
    required: true
  },

  owner_id: {
    type: mongoose.ObjectId,
    ref: 'Quizz',
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Specific_quizz', specificQuizzSchema);
