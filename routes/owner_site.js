const { Router } = require('express');
const User = require('../models/User');

const router = Router();

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
