const { Router } = require('express');
const { getAllQuizz, addQuizz } = require('../controllers/adminControllers');

const router = Router();

router.post('/approve-users', async (req, res) => { res.send() });

router.get('/quizz/:language', async (req, res) => {

  try {
    const language = (req.params.language).toLocaleLowerCase();
    const response = await getAllQuizz(language, req.body.id);  
    let listOfQuizz = [];
    
    if(Array.isArray(response.body)){
      for(let quizz of response.body){
        listOfQuizz.push({ language: quizz.language, answer: quizz.answers, id: quizz._id });
      }

      res.status(response.status).send(listOfQuizz); 

    } else {
      res.status(response.status).send(response.body);
    }


  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error', error: err.message });
  }

});

router.post('/add/quizz', async (req, res) => {


  try {

    const { language, quizz, answers, correct_answer, id } = req.body;
    console.log({ language, quizz, answers, correct_answer, id});

    const respond = await addQuizz({ language, quizz, answers, correct_answer, owner_id: id });
    
    res.status(respond.status).send(respond.body);

  } catch (err) {
      res.status(500).send({ message: 'Internal Server Error', error: err.message });
  }
});

router.put('/edit/quizzes/:quiz_id', (req, res) => {});

router.delete('/delete/quizzes/quiz_id', (req, res) => {});

module.exports = router;