require('dotenv').config();
const nodemailer = require('nodemailer');


console.log( {auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
}})

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: "SSLv3"
    },
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

function makeEmail(receiver, text) {
    return {
        from: process.env.EMAIL_USER,
        subject: "E-mail automatique",
        to: receiver,
        text
    }
}

function getMessageResponse() {
    return (err, info) => {
        if(err) {
            return { error: true, message: err.message };
        } else {
            return { error: false, message: info.response };
        }

    }
}

function sendEmail({ receiver, text }){
    transporter.sendMail(makeEmail(receiver, text), getMessageResponse());
}

module.exports = sendEmail;
