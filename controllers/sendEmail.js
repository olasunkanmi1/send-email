const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

// testing with ethereal
const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'isobel23@ethereal.email', 
            pass: 'VYHjj6Gmd9Hejd5YEW'
        },
        // to fix "msg": "self-signed certificate in certificate chain" error
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"Olasunkanmi" <abdulsalamquadri999@ethereal.email>',
        to: 'olasunkanmiaq@gmail.com',
        subject: 'Testing Email sending',
        html: '<h2>Testing email sending with ethereal</h2>',
    });

  res.json(info);
}

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'olasunkanmiaq@gmail.com', // Change to your recipient
      from: 'abdulsalamquadri999@gmail.com', // Change to your verified sender
      subject: 'Test SENDGRID',
      text: 'This is an example email to see how sendgrid works',
      html: '<strong>so easy and swift</strong>',
    };
    const info = await sgMail.send(msg);
    res.json(info);
  };

module.exports = sendEmail