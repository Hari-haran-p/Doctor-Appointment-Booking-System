const nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "36c716d24777d6",
      pass: "55b82a8ff9c45b"
    }
  });

module.exports = transporter;