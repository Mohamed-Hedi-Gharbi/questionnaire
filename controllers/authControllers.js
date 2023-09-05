const User = require('../models/users');
const jwt = require('jsonwebtoken');
const router = require('../routes/blogRoutes');

const signup_get = (req, res) => res.render('signUp', { user: false });
const signup_user = {
    get: (req, res) => res.render('signUp', { user: true }),
    post: (req, res) => res.send({ message: 'Not Yet !' })
}

const login_get = (req, res) =>
{
    res.render('login');
}
const handleError = (err) =>
{
    console.log(err.message, err.code);
    let errors = { name: '', email: '', password: '', test: '' };

    // incorrect email
    if (err.message === 'incorrect email')
    {
        errors.email = 'Wrong Email or password';
    }

    // incorrect password
    if (err.message === 'incorrect password')
    {
        errors.password = 'Wrong Email or password';
    }

    // duplicate error code
    if (err.code === 11000)
    {
        errors.email = 'Please enter a new email';
        return errors;
    }

    // validation errors
    if (err.message.includes('User validation failed:'))
    {
        Object.values(err.errors).forEach(({ properties }) =>
        {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) =>
{
    return jwt.sign({ id }, 'net test secret', {
        expiresIn: maxAge
    });
};

const signup_post = async (req, res) =>
{
    const { name, email, password } = req.body;
    try
    {
        const user = await User.create({ name, email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err)
    {
        const errors = handleError(err);
        res.status(400).json({ errors });
    }
};

const login_post = async (req, res) =>
{
    const { email, password } = req.body;

    try
    {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err)
    {
        const errors = handleError(err);
        res.status(400).json({ errors });
    }
};


const logout_get = (req, res) =>
{
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/login');
}

module.exports = {
    login_get,
    signup_get,
    login_post,
    signup_post,
    logout_get,
    signup_user
}