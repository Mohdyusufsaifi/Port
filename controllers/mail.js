const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

exports.sendEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
            user: "Azeem Saifi",
            pass: "c00d97fbb11d7d02e27210eaa842f3b5"
        }
    });
    const mailOptions = {
        from: "azeemsaifi38180@gmail.com",
        to: "azeemsaifi38180@gmail.com",
        subject: "Someone Contact your site",
        html: "<p>Name: " + req.body.name + "</p> Email: " + req.body.email + "<p> Phone Number: " + req.body.number +
            "<p> Message: " + req.body.message
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(`<script>window.location.assign("https://port-mohdyusufsaifi.onrender.com/Contact")</script>`)
        }
    })
};
