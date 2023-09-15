const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: "SSLv3"
    },
    auth: {
        user: "mohamedhedigharbi@outlook.fr",
        pass: "9orenkarim1234"
    }
});

function makeEmail(receiver, text) {
    return {
        from: "mohamedhedigharbi@outlook.fr",
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

function sendEmail({ receiver, text}){
    transporter.sendMail(makeEmail(receiver, text), getMessageResponse());
}

module.exports = sendEmail;
