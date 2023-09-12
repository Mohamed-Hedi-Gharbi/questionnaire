require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'My Secret Key !';

module.exports = async function (req, res, next) {
        
    const role = req.body.role;

    if (role === "admin")
    {
        next();
    } else {
        res.status(401).send({ body: 'Unauthorized to perform this actions' });
    }
}