const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const cors = require('cors');

require('./init');

const { authRouter, adminRouter, userRouter, administrationRouter } = require('./routes');
const isUserAuthorised = require('./utils/isUserAuthorised');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ 
    origin: "*"
}))

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

const dbURL = process.env.DB_URL;
const online_DB_URL = process.env.ONLINE_DB_URL;

app.use('/administration', administrationRouter);

app.use('/auth', authRouter);
app.use('/api/user', userRouter);

app.use(isUserAuthorised);
app.use('/api/admin', adminRouter);


app.use((req, res) => res.status(404).send({ message: 'Invalid API request' }));
app.use((err, req, res, next) => res.status(500).send({ message: 'Internal Server Error' }));

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connection successfull'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log('listening on port', PORT));
