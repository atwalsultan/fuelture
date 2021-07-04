const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

require("dotenv").config();

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

router.post("/", urlEncodedParser, (req, res) => {
    const mailOptions = {
        to: process.env.EMAIL,
        subject: `Fuelture | Message from ${req.body.firstName}${req.body.lastName && ' ' + req.body.lastName}`,
        text: `Hi Sultan,\n${req.body.firstName}${req.body.lastName && ' ' + req.body.lastName} just submitted the contact form on Fuelture. Here's what they wrote:\n\n\t"${req.body.message}"\n\nYou can reach out to them using the email they provided: ${req.body.email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect('/about');
});

module.exports = router;
