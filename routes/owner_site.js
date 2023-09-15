const { Router } = require('express');
const fs = require('fs');

const User = require('../models/User');
const path = require('path');
const sendEmail = require('../utils/sendEmail');
const generatePassword = require('../utils/generatePassword');
const {
    getNumberOfWrongAttempts,
    saveCode,
    deleteCode,
    getCode,
    incrementWrongAttempts
} = require('../db/verificationCode');

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', async(req, res) => {
    const { email, password } = req.body;
    const IP = req.ip;

    if(email === "mohamedhedigharbi101@gmail.com" && password === "test12345"){
        
        const getGeneratedCode = generatePassword(8);
        const result = await saveCode({ code: getGeneratedCode, ip: IP }); 
        
        if(result.error === false){
            sendEmail({ receiver: "mohamedhedigharbi101@gmail.com", text: getGeneratedCode });
        }

        res.cookie('redirect', 'true').redirect('/administration/verification-code');

    } else {
        res.status(404).json({ error: "Email or password are wrong" });
    }

})

router.get('/verification-code', async (req, res) =>
{
    
    const IP = req.ip;
    const numberOfWrongAttempts = await getNumberOfWrongAttempts(IP);
    console.log({ numberOfWrongAttempts });

    if(numberOfWrongAttempts >= 3){
        res.render('blocked');
    } else if (true === false) {
        // the code must be less than 5min
        
        await deleteCode(IP);
    }

    else if(req.cookies.redirect === 'true') {
        res.render('verification');
    } else {
        res.render('404');
    }


});

router.post('/verification-code', async (req, res) =>
{
    const code = req.body.code;
    const IP = req.ip;
    if (!code || code.length !== 8)
    {
        res.status(400).send({ message: 'Please Provide the code' });
    } else
    {
        const { code: getCodeFromDB, _id, numberOfAttempts } = await getCode(IP);
        if (getCodeFromDB === code)
        {
            res.redirect('/administration/home');
        } else
        {
            await incrementWrongAttempts(_id, numberOfAttempts);
            res.status(200).send({ message: 'code provided is wrong' });
        }
    }
});

router.get('/home', (req, res) => res.send('home'));

router.put('/approves-user/:id', async (req, res) => {
    try {
        
        const id = req.params.id;
        const  user  = await User.findById(id);
        console.log(user);
        const { ask_for_admin, role } = user;
        if(ask_for_admin === true) {
            
            if(role === "admin") {
                res.status(400).send({ body: "This user is already an admin" });
            } else {
                await User.findByIdAndUpdate(id, { role: "admin" });
                res.status(200).send({ body: "The user become an admin" });
            }

        } else {
            res.status(400).send({ body: "This user is not asking to become an admin" });
        }
        
    } catch (error) {
        res.status(500).send({ body: error.message });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ body: users });
    } catch (error) {
        res.status(500).send({ body: error.message });
    }
});

module.exports = router;
