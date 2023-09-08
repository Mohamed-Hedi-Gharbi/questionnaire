const Quizz = require("../models/Quizz");
const Specific_Quizz = require("../models/Specific_Quizz");

async function getAllQuizz(language, owner_id, supportedLanguage = ['javascript', 'cs', 'php']) {
  
  const index = supportedLanguage.findIndex(e => e === language);

  if(index === -1) return { status: 400, body: 'Invalid language' };

  try {

    const quizzes = await Quizz.find();
    const specific_quizz = await Specific_Quizz.find({ owner_id });

    for(let { quizz } of specific_quizz) {
      quizzes.push(quizz)
    }

    return { status: 200, body: quizzes };

  } catch (error) {
    throw new Error(error);
  }
}

async function addQuizz({ language, quizz, answers, correct_answer, owner_id }) {

  try{

    if(!language) return { status: 400, body: 'Language is required' };
    if(!quizz) return { status: 400, body: 'Please provide the quizz question' };
    if(!correct_answer) return { status: 400, body: 'Please provide correct answer' };
    if(!answers || answers.length === 0) return { status: 400, body: 'Invalid answers' };
  
    const _quizz = new Quizz({ language, quizz, answers, correct_answer });
    const new_quizz = new Specific_Quizz({ quizz: _quizz, owner_id });
  
    const saveQuizz = await new_quizz.save();

    return {
      status: 201,
      body: {
        error: false,
        message: 'Quizz added successfully',
        id: saveQuizz._id
      }
    }

  } catch (error) {
    throw new Error(error);
  }

}

module.exports = {
  getAllQuizz,
  addQuizz
}