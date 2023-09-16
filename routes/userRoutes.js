const { Router } = require('express');

const User = require('../models/User');
const isAuthenticate = require('../utils/isAuthenticate');
const Quizz = require('../models/Quizz');

const router = Router();

router.use(isAuthenticate);

router.get('/', (req, res) => {
    const { id, email, username, role } = req.body;

    res.send({ id, email, username, role });
});

router.post('/ask-for-admin', async (req, res) => {
    try {
        const id = req.body.id;
        const { ask_for_admin } = await User.findById(id);

        if(ask_for_admin === true) {
            res.status(400).send({ body: "You already asking to become an admin" });
        } else {
            await User.findByIdAndUpdate(id, { ask_for_admin: true });
            res.status(201).send({ body: "Your request to become an admin has been aproved" });
        }

    } catch (error) {
        throw new Error(error);
    }
});

router.get('/quiz', async (req, res) => {
    const listOfQuizz = await Quizz.find();

    const groupingQuiz = {};

    for (let i = 0; i < listOfQuizz.length; ++i){
        const { language, question, answers, correct_answer, explanation } = listOfQuizz[i];
        
        if (language in groupingQuiz) {
            groupingQuiz[language].push({
                id: listOfQuizz[i].get('id'),
                question,
                answers,
                correct_answer,
                explanation
            });
        } else {
            groupingQuiz[language] = [{
                id: listOfQuizz[i].get('id'),
                question,
                answers,
                correct_answer,
                explanation
            }]
        }
    }

    console.log({ groupingQuiz });

    res.status(200).send({ body: groupingQuiz });
});

router.get('/quiz/:language', async(req, res) => {
    const listOfQuizz = await Quizz.find({ language: req.params.language });
    
    if(listOfQuizz.length === 0) {
        return res.status(400).send({ message: 'You are fetching non existing data.' });
    }

    const filterdResponse = [];

    for(let i = 0; i < listOfQuizz.length; ++i){
        filterdResponse.push({ 
            id: listOfQuizz[i].id,
            question: listOfQuizz[i].question,
            answers: listOfQuizz[i].answers
        });
    }

    const _shuffledArray = shuffleArray(filterdResponse);
    _shuffledArray.length = 15;

    res.status(200).send({ language: req.params.language, data: _shuffledArray });
});

router.post('/submit', async (req, res) => {
    const { language, data } = req.body;
    const listOfQuiz = await Quizz.find({ language });

    const { correct_answer, wrong_answer } = calculAnswer(data, listOfQuiz);

    res.status(200).send({ correct_answer, wrong_answer });
});

router.get('/results', (req, res) => {});

function shuffleArray(arr) {
    const shuffledArray = [...arr]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function calculAnswer(data, listOfQuiz){
    let correct_answer = 0;
    let wrong_answer   = 0;

    for(let q of listOfQuiz){
        for(let d of data) {
            if(d.id === q.get('id')) {
                if(d.answer === q.correct_answer){
                    correct_answer += 1;
                } else {
                    wrong_answer += 1;
                }
            }
        }
    }

    return { correct_answer, wrong_answer };
}

module.exports = router;
