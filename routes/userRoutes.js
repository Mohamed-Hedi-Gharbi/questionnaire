const { Router } = require('express');

const User = require('../models/User');
const isAuthenticate = require('../utils/isAuthenticate');
const Quizz = require('../models/Quizz');

const router = Router();

router.use(isAuthenticate);

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

router.get('/quiz', async(req, res) => {
    const listOfQuizz = await Quizz.find();

    res.status(200).send({ body: listOfQuizz });
});

router.post('/submit', (req, res) => {});

router.get('/results', (req, res) => {});

module.exports = router;
