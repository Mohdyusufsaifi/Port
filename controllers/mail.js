const express= require('express');
const app=express();
const nodemailer = require('nodemailer');

exports.sendEmail=(req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'euna86@ethereal.email',
            pass: '17PsGWtXTJe6Zrqws4'
        }
    });

    const mailOptions = {
        from: "azeem.khan@locofast.com",
        to: "azeem.khan@locofast.com",
        subject:"Someone Contact your site",
        html: "<p>Name: "+req.body.name+"</p> Email: "+req.body.email+"<p> Phone Number: "+req.body.number+
        "<p> Message: "+req.body.message
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(`<script>window.location.assign("https://port-mohdyusufsaifi.onrender.com/Contact")</script>`)
        }
    })
};
