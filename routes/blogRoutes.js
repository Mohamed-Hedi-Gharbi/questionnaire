const { Router } = require('express');
const Blog = require('../models/blogs'); // Assurez-vous que le chemin vers les blogs est correct


const router = Router();

// Définition de la fonction de mélange aléatoire
function shuffleArray (array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

router.get('/home', (req, res) => res.render('home'));

router.get('/admin', (req, res) => res.render('admin'));

router.get('/question/:id', async (req, res) =>
{
    const id = req.params.id;

    const listOfLanguages = {
        cs: 'CS',
        js: 'Node.js',
        php: 'PHP'
    }

    if (listOfLanguages[id] === undefined) return res.send('Not found 404');

    try
    {
        const result = await Blog.findOne({ language: id.toUpperCase() });

        // language not found 
        if (result === null) return res.send('Not found 404');

        const { question, _id } = result
        const shuffledQuestions = shuffleArray(question);

        const data = {
            blogs: shuffledQuestions,
            questionId: _id,
            title: listOfLanguages[id]
        }
        res.render('test', data);

    } catch (error)
    {
        console.log(error);
        res.send('Not found 404');
    }

});

async function calculate ({ questionId, questions })
{
    let correctAnswer = 0;
    const result = await Blog.findById(questionId);

    if (result !== null)
    {
        for (let i of questions)
        {
            for (let x of result.question)
            {
                if (i.questioonId === x.get("id") && i.answer === x.answer)
                {
                    correctAnswer += 1;
                }
            }
        }
    }

    return correctAnswer;
}

module.exports = router;
