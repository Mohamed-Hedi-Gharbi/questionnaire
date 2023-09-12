const mongoose = require('mongoose');

const quizzSchema = new mongoose.Schema({
  language: {
    type: String,
    enum: ['javascript', 'cs', 'php'],
    required: true
  },

  question: {
    type: String,
    required: true,
  },

  answers: {
    type: [String],
    required: true,
    maxLength: 4
  },

  correct_answer: {
    type: String,
    required: true
  },

  explanation: {
    type: String
  }

});

module.exports = mongoose.model('Quizz', quizzSchema);
