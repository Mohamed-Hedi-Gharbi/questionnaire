const mongoose = require('mongoose');

const passed_quiz = new mongoose.Schema({

  user_id: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true
  },

  quiz: [{
    quiz_id: {
      type: mongoose.ObjectId,
      ref: 'Quizz',
      required: true
    },

    answer: { type: String, required: true },
  }]

}, { timestamps: true});

module.exports = mongoose.model('Passed_quiz', passed_quiz);
