require('dotenv').config();
const express = require('express');
const router = express.Router();
const contactEmail = require('../models/ContactEmail');

router.post("/", (req, res) => {
    const name = req.body.name;
    const subject = req.body.subject;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: process.env.EMAIL_ADDRESS,
      subject: subject,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    });
  });

module.exports = router;
