const express= require('express');
const app=express();
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
//     });
exports.sendEmail=async(req,res)=> {
    const clientId = '402509665383-akkt7dce3buasdbr2mlho53u9jsvqtvg.apps.googleusercontent.com';
    const clientSecret = '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';
    const refreshToken = 'https://oauth2.googleapis.com/token';
  
    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oAuth2Client.setCredentials({ refresh_token: refreshToken });
  
    const accessToken = await oAuth2Client.getAccessToken();
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'azeemsaifi38180@gmail.com',
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken
      }
    });

    const mailOptions = {
        from: "frederik.kovacek75@ethereal.email",
        to: "azeemsaifi38180@gmail.com",
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
