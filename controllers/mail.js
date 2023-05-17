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
            accessToken:'ya29.a0AWY7Ckk1PBwODZUz6U_TBL69zdrcZvWESbrn1ZtM0ibqU8BZb0UoMD6Brm_q3LQUe4UWtuoTZ_0fC99QWS__MH5fJ54AMEhiwPh-fjbjYaU5v_4AjikWvNoqIIG0ZN-uduNWa5d36n4tYXCjigVTQmUEnwgsaCgYKAScSARESFQG1tDrp7VqNJP1rY_OMxavTIxqRtQ0163',
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
