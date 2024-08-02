const nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "9ggv1@belgianairways.com",
        pass: "node@123"
    }
});

var mailoptions = {
    from: "9ggv1@belgianairways.com",
    to: "jidabi7810@digdy.com",
    subject: "NodeJs Mail Transporter",
    text: "Node"
}

transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("Email Sent" + info.response);
    }
})