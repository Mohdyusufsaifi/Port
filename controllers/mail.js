const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
    const transport = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "e7da58605caeb8281177b28d971fde0c"
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
            console.log(error);
        } else {
            res.status(200).send(`<script>window.location.assign("https://port-mohdyusufsaifi.onrender.com/Contact")</script>`)
        }
    })
};
