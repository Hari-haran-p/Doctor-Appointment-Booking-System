const nodemailer = require('nodemailer');
require('dotenv').config();

require('dotenv').config();
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
OAuth2_client.setCredentials({refresh_token:process.env.REFERESH_TOKEN})
const access_token = OAuth2_client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: 'smtp.gmail.email',
  port: 465,
  secure: true,
  auth: {
      type: "OAuth2",
      user:process.env.EMAIL_ID,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      accessToken:access_token,
      refreshToken:process.env.REFERESH_TOKEN
  }
});
  
module.exports = transporter;