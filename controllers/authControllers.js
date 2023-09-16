require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const SECRET_KEY = process.env.JWT_SECRET_KEY || 'My Secret Key !';

async function login({ email, password }) {

    if(!email) return { status: 400, body: { message: 'Email is required' } };
    if(!password) return { status: 400, body: { message: 'password is required' } };

    const user = await User.findOne({ email });
    if(user === null) return { status: 404, body: { message: 'Email or password is wrong' } };

    const isSamePassword = await bcrypt.compare(password, user.password);

    if(isSamePassword === true){

        const response = { id: user._id, email: user.email, username: user.name, role: user.role }
        const token = jwt.sign(response, SECRET_KEY);

        return { status: 200, body: { ...response, token } };

    } else {
        return { status: 404, body: { message: 'Email or password is wrong' } };
    }
}

async function singup({ email, password, name }) {

    if(!email) return { status: 400, body: { message: 'Email is required' } };
    if(!password) return { status: 400, body: { message: 'password is required' } };
    if(!name) return { status: 400, body: { message: 'name is required' } };

    const isUserExist = await User.findOne({ email: email });

    if(isUserExist === null){

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({ email, name, password: hashedPassword });
        
        try {

            const savedUser = await user.save();

            const response = {
                id: savedUser._id,
                email: savedUser.email,
                username: savedUser.name,
                role: user.role
            }

            const token = jwt.sign(response, SECRET_KEY);

            return { status: 201, body: { ...response, token } };

        } catch(err) {
            throw new Error(err);
        }

    } else {
        return { status: 404, body: { message: 'User with this account already exist' } };
    }
}

module.exports = { singup, login }