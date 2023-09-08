const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { authRouter, adminRouter, userRouter } = require('./routes');
const isAuthenticate = require('./utils/isAuthenticate');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const PORT = 3000;
const dbURL = "mongodb://localhost:27017/questionnaire";
// const dbURL = 'mongodb+srv://stage2023:test1234@node-test.3ewgssi.mongodb.net/stage?retryWrites=true&w=majority'

app.use('/auth', authRouter);
app.use(isAuthenticate);
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);

app.use((req, res) => res.status(404).send({ message: 'Invalid API request'}));
app.use((err, req, res, next) => res.status(500).send({ message: 'Internal Server Error'}));

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log(err));
app.listen(PORT, () => console.log('listening on port', PORT));
