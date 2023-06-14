const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

exports.sendEmail = async (req, res) => {
    const oauth2Client = new OAuth2(
        "402509665383-akkt7dce3buasdbr2mlho53u9jsvqtvg.apps.googleusercontent.com",
        "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",
        "https://developers.google.com/oauthplayground"
   );
    oauth2Client.setCredentials(
        {
            refresh_token:"1//04crQNYGvTA2QCgYIARAAGAQSNwF-L9IrJH3QHoL1DAnkpgTPHDpd_NnA_CaqqfvYqabPKcGx7c54s78cFrcCZ6EydRWxJD4V_NE"
        });
    const accessToken = oauth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'azeemsaifi38180@gmail.com',
            clientId:"402509665383-akkt7dce3buasdbr2mlho53u9jsvqtvg.apps.googleusercontent.com",
            clientSecret:"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",
            refreshToken:"1//04crQNYGvTA2QCgYIARAAGAQSNwF-L9IrJH3QHoL1DAnkpgTPHDpd_NnA_CaqqfvYqabPKcGx7c54s78cFrcCZ6EydRWxJD4V_NE",
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
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
