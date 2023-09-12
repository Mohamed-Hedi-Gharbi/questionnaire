const { Router } = require('express');

const {
  getInitialQuizz,
  getSpecificQuizz,
  addQuizz,
  updateQuizz,
  deleteQuizz,
  isAllowed
} = require('../controllers/adminControllers');

const isLanguageSupported = require('../utils/isLanguageSupported');

const router = Router();

router.get('/quizz/:language', async (req, res) => {
  try {
    const language = (req.params.language).toLocaleLowerCase();
    if (isLanguageSupported(language))
    {
      
      const quizz = await getInitialQuizz(language, req.body.id);
      const specific_quizz = await getSpecificQuizz(language, req.body.id);
      const listOfQuizz = [];


      const addToListOfQuizz = (array, listOfQuizz) =>
      {
        for (let index in array)
        {
          const { answers, question, id } = array[index];
          listOfQuizz.push({ answers, question, id });
        }

        return listOfQuizz;
      }

      addToListOfQuizz(specific_quizz, addToListOfQuizz(quizz, listOfQuizz));

      res.status(200).send({ language, quizz: listOfQuizz });

    } else
    {
      res.status(400).send({ body: "Invalid Language" });
    }


  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error: error.essage });
  }

});

router.post('/add/quizz', async (req, res) => {
  const { language, question, answers, correct_answer, id } = req.body;
  
  if (!language) {
    return res.status(400).send({ body: 'Language is required' });
  }

  if(!question) { 
    return res.status(400).send({ body: 'Please provide the quizz question' });
  }
  if(!correct_answer) { 
    return res.status(400).send({ body: 'Please provide the correct answer' });
  }
  if(!answers || answers.length === 0) { 
    return res.status(400).send({ body: 'Invalid answers' });
  }

  try {
    
    const respond = await addQuizz({ language, question, answers, correct_answer, owner_id: id });
    res.status(respond.status).send(respond.body);

    res.send();
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error: error.essage });
  }

});

router.put('/edit/quizz/:quiz_id', async(req, res) => {
  const question_id = req.params.quiz_id;
  try{
    
    const { language, question, answers, correct_answer, id } = req.body;


    const response = await updateQuizz({ language, question, answers, correct_answer, owner_id: id, question_id });
    res.status(response.status).send(response.body);
    

  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error: error.essage });
  }
});

router.delete('/delete/quizz/:quiz_id', async (req, res) => {
  const question_id = req.params.quiz_id;
  try{
    
    const { id } = req.body;
      const response = await deleteQuizz(id, question_id);
      res.status(response.status).send(response.body);
    

  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error: error.essage });
  }
});


module.exports = router;