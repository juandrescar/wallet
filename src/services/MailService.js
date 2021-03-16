const dotenv = require('dotenv');

dotenv.config();

class MailService {

  constructor(id, pay, email, token) {
    this.id = id;
    this.pay = pay;
    this.email = email;
    this.token = token;

    var nodemailer = require('nodemailer');

    this.transport = nodemailer.createTransport({
      host: process.env.SMTP_SERVICE_HOST,
      port: process.env.SMTP_SERVICE_PORT,
      auth: {
        user: process.env.SMTP_USER_NAME,
        pass: process.env.SMTP_USER_PASSWORD
      }
    });
  }

  send() {
    this.transport.sendMail(this.getMessage(), function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  }

  getMessage() {
    var link = '<a href="'+ process.env.URL_WEB + 'confirm?id=' + this.id + '&pay=' + this.pay + '">Confirm your payment</a>'
    return {
      from: process.env.EMAIL_SUPPORT,
      to: this.email,
      subject: 'Payment in process',
      text: 'To finish processing your payment, enter the following link '+ link +' and enter the following code: ' + this.token
    };
  }
}
  
module.exports = MailService;

