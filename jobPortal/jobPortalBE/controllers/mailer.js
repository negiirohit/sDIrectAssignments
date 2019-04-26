

var nodemailer = require('nodemailer');
const config = require('../config/config');



module.exports.sendMail = (req,res,next) => {


    const msg ={
        name : req.body.name,
        email: req.body.email,
        message: req.body.message
    }


//var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: config.email,
             pass: config.password
         }
     });
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Job Portal ?" <sdd.sdei@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: `Hi You Have Got a new application for  `, // Subject line
        text: `Message ${req.body.message}`, // plaintext body
        html: '<b>Thank You</b>' // html body
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });


}
