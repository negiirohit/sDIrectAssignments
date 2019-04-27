

var nodemailer = require('nodemailer');
const config = require('../config/config');



module.exports.sendMail = (job,applicant) => {

    console.log('sending mail');

    console.log(job.email);

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
        to: job.email, // list of receivers
        subject: ` New application for ${job.post} `, // Subject line
      //  text: `Hi You Have Got a new application for ${job.post} from ${applicant.firstName} ${applicant.lastName}.
      //         To view profile click here http://localhost:4200/jobSeeker/seeker_id=${applicant._id}`, // plaintext body
        html: `<div> Hi You Have Got a new application for ${job.post} from ${applicant.firstName} ${applicant.lastName}
        To view profile  <a hrf="http://localhost:4200/jobSeekerProfile/seeker_id=${applicant._id}"> click here </a> </div><br><b>Thank You</b>` // html body
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });


}
