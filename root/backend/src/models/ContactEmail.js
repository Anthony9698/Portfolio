require('dotenv').config();
const nodemailer = require('nodemailer');

const contactEmail = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    },
});

module.exports = contactEmail;
