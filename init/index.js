const Quizz = require("../models/Quizz");

const phpQuestions = require('./php_questions');
const jsQuestions = require('./javascript_questions');
const csQuestions = require('./cs_questions');




async function init(array, language) {
  if( (await Quizz.findOne({ language})) === null){
    array.forEach(async(_) => {
      const anyData = await Quizz.findOne({ language });
        const quiz = new Quizz({ 
          language, 
          question: _.question,
          answers: _.answers,
          correct_answer: _.correct_answer,
          explanation: _.explanation
        });
    
        await quiz.save();
      })
  }
}

init(phpQuestions, "php");
init(jsQuestions, "javascript");
init(csQuestions, "cs");