const Quizz = require("../models/Quizz");
const Specific_Quizz = require("../models/Specific_Quizz");

async function _getQuizz(DB, options, supportedLanguage = ['javascript', 'cs', 'php']) {
  
  try {
    
    return await DB.find(options);

  } catch (error) {
    throw new Error(error);
  }

}

async function getSpecificQuizz(language, owner_id, supportedLanguage = "") {
  try {
  
    const x = await _getQuizz(Specific_Quizz, { owner_id });
    const listOfQuiz = [];

    for(let index in x){
      const { quizz } = x[index];
      if(language === quizz.language) {
      listOfQuiz.push(quizz);
      }      
    }

    return listOfQuiz;
  
  } catch (error) {
    throw new Error(error);
  }

}

async function getInitialQuizz(language) {
  try {
  
    const options = { language };
    return _getQuizz(Quizz, options);
  
  } catch (error) {
    throw new Error(error);
  }

}

async function addQuizz({ language, question, answers, correct_answer, owner_id }) {
  try{
  
    const _quizz = new Quizz({ language, question, answers, correct_answer });

    try{
      const new_quizz = new Specific_Quizz({ quizz: _quizz, owner_id });

      try {
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
        throw Error(error);
      }
      
    } catch(error) {
      throw Error(error);
    }
  

  } catch (error) {
    console.log(error.message);
    throw Error(error);
  }

}

async function updateQuizz({ language, question, answers, correct_answer, question_id, owner_id }) {

  try {
    const quizz = { language, answers, question, correct_answer, explanation: "" };

    await Specific_Quizz.findById(question_id)
      .updateOne({ owner_id }, { quizz });

    return {
      status: 200,
      body: {
        error: false,
        message: 'Quizz updated successfully',  
      }
    }

  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
}

async function deleteQuizz(owner_id, question_id) {
  try {
    await Specific_Quizz.findById(question_id)
      .deleteOne({ owner_id });
    
    return {
      status: 200,
      body: {
        error: false,
        message: 'Quizz deleted successfully',  
      }
    }

  } catch (error) {
    throw Error(error);
  }
}

module.exports = {
  getInitialQuizz,
  getSpecificQuizz,
  addQuizz,
  updateQuizz,
  deleteQuizz
}