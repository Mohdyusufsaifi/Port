const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// exports.sendEmail=(req, res) => {
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'frederik.kovacek75@ethereal.email',
//             pass: 'b1ZVaXG2t6Czt5dyuu'
//         }
// //     });
exports.sendEmail=(req, res) => {
    const transporter =nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'azeemsaifi38180@gmail.com',
            clientId: '402509665383-akkt7dce3buasdbr2mlho53u9jsvqtvg.apps.googleusercontent.com',
            clientSecret: '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',
            accessToken:'ya29.a0AWY7Ckl4U0V7UXgEaymzzEcpUkSD2X1IJmJCFyXlUpkAFSQyng6mhAob7Vue84gpBI9BRiljHKalNP7Q2Gm_99wcWEpNnzcQJs3xZaGZJBGA42ZHklzSvAh-xurwHDlk89K8QRZvCEiwaCHZIuC0sCpxWM6YaCgYKAS0SARESFQG1tDrpAc9JwOsYMS4KubIdm8bQCg0163',
            refreshToken:'1//04vaGrRHb1kbmCgYIARAAGAQSNwF-L9Ir6B4JdpD2TSxyv7pY2NWIjFrZJ5R3TS7_7Oz3hANp9DozNzcxvKHs69m91QdpO5WqWgI',
        }
    });

    const mailOptions = {
        from: "frederik.kovacek75@ethereal.email",
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
