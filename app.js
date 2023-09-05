const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/authRoutes');
const blogRoute = require('./routes/blogRoutes');

const Blog = require('./models/blogs');
const Blog2 = require('./models/blogs2');
const CorreCS = require('./models/correctionC#');
const CorreNodeJS = require('./models/correNode')

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

const dbConnect = 'mongodb+srv://stage2023:test1234@node-test.3ewgssi.mongodb.net/stage?retryWrites=true&w=majority'

const dbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


mongoose.connect(dbConnect, dbOption)
    .then((client) =>
    {
        console.log('connect to mongobd');
        app.listen(3000);
    })
    .catch((errorr) =>
    {
        console.log(Error(errorr.message));

    })



// Redirect to login page when accessing the root URL

//app.use(redirectToMainPage);
app.use(authRoute);
app.use(isAuthenticate);
app.use(blogRoute);




function isAuthenticate (req, res, next)
{
    const jwt = req?.cookies?.jwt;

    if (jwt === undefined)
    {
        res.redirect('/login')
    } else
    {
        next();
    }
}



function redirectToMainPage (req, res, next)
{
    const jwt = req?.cookies?.jwt;

    if (jwt === undefined)
    {
        next();
    } else
    {
        res.redirect('/blogs/cs')
    }
}




app.get('/add-blog', async (req, res) =>
{
    const nodeJSBlog = await Blog2.find();
    const correctAnswersNode = await CorreNodeJS.find();

    const x = {
        "_id": "64d348795df7db8237dd9e51",
        "title": "Quelle méthode est utilisée pour supprimer un fichier en utilisant le module fs en Node.js ?",
        "q1": "a) fs.deleteFile()",
        "q2": "b) fs.unlink()",
        "q3": "c) fs.removeFile()",
        "q4": "d) fs.delete()",
        "__v": 0
    }

    const listOfQuestions = [];

    for (let index in correctAnswersNode) // nodeJSBlog.length === correctAnswersCS.length
    {
        let { title, q1, q2, q3, q4 } = nodeJSBlog[index];
        const answer = correctAnswersNode[index]['q'];

        listOfQuestions.push({ title, q1, q2, q3, q4, answer })

    }

    const blog = new Blog({ language: 'Node.JS', question: listOfQuestions });
    await blog.save();


    console.log({ listOfQuestions })


    res.send({ correctAnswersNode, nodeJSBlog });

});





app.get('/add-blogs', (req, res) =>
{
    const blogs = new Blog({
        question: {
            title: "Comment déclarez-vous une variable en PHP ?",
            q1: "variable $nom;",
            q2: "var nom_variable;",
            q3: "$nom_variable;",
            q4: "$nom_variable;",
            answer: "$nom_variable;"
        }
    });

    blogs.save()
        .then((result) =>
        {
            res.send(result);
        })
        .catch((error) =>
        {
            console.log(Error(error.message));
        });
});




