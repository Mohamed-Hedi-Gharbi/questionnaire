const { Router } = require('express');
const { login, singup } = require('../controllers/authControllers');

const router = Router();

router.post('/login', async(req, res) => {
    try {

        const { email, password } = req.body;
        console.log({ email, password });
        const respond = await login({ email, password });

        if(respond.body.token){
            res.setHeader('Authorization', respond.body.token);
        }

        res.status(respond.status).send(respond.body);
        

    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
});

router.post('/signup', async(req, res) => {
    try {
        
        const { email, password, name } = req.body;
        console.log({ email, password, name });
        const respond = await singup({ email, password, name });
        console.log({ respond });
        if(respond.body.token){
            res.setHeader('Authorization', respond.body.token);
        }
        
        res.status(respond.status).send(respond.body);

    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
});

router.get('/logout', async(req, res) => {
    res.cookie('token', '', { expires: new Date(0) });
    res.status(204).send();
});

module.exports = router;
