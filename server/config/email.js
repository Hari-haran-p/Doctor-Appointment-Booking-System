
const nodemailer = require('nodemailer');
require('dotenv').config();
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
OAuth2_client.setCredentials({refresh_token:process.env.REFERESH_TOKEN})
const access_token = OAuth2_client.getAccessToken();

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "36c716d24777d6",
      pass: "55b82a8ff9c45b"
    }
  });

module.exports = transporter;