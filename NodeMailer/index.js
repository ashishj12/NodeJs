// const nodemailer = require("nodemailer")

// var transporter = nodemailer.createTransport({
//     service : "gmail",
//     auth:{
//         user:"xyz@gmail.com",
//         pass:"abc"
//     }
// });


// var mailoptions =  {
//     from: 'xyz@gmail.com',
//     to: 'abc@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy'
// }

// transporter.sendMail(mailoptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });


const nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user:"node@gmail.com",
        pass:"node@123"
    }
});

var mailoptions = {
    from:"node@gmail.com",
    to:"xyz@gmail.com",
    subject:"NodeJs Mail Transporter",
    text:"Node"
}

transporter.sendMail(mailoptions,(error,info)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Email Sent"+info.response);
    }
})