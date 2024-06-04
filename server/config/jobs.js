const corn = require('node-cron');
const appointments = require('../models/appointments.model');
const sequelize = require('./database');
const { promisify } = require('util');
const fs = require("fs");
const readFile = promisify(fs.readFile);
const transporter = require("./email.js");

corn.schedule('12 09 * * *', async () => {
    try {
        console.log('Running the update status job...');
        await sequelize.query("UPDATE appointments SET AppointmentStatus='expired', AppointmentRemark='Customer missed the slot' WHERE AppointmentStatus='booked' AND AppointmentDate < CURDATE()");
        console.log('Status updated successfully....');
    } catch (error) {
        console.error('Error updating status:', error);
    }
})

corn.schedule('0 0 * * *', async()=>{
    try{
        const [appointment] = await sequelize.query("SELECT * FROM AppointmentView WHERE AppointmentDate > CURDATE()");
        appointment.forEach(async(app)=>{
            await sendRemainderEmail(app.UserEmail, app.PatientName, app.AppointmentDate, app.AppointmentTime);
        })
    }catch(error){
        console.log(error);
    }
})

function replacePlaceholders(template, placeholders) {
    return template.replace(/\$\{(\w+)\}/g, (_, key) => placeholders[key] || '');
}

async function sendRemainderEmail(toEmail, patientName, appointmentDate, appointmentTime){
    const imageAttachment = await readFile('./assets/images/register.jpg');
    const htmlTemplate = await readFile("./assets/mail/remainder.html", 'utf-8');
    const placeHolders = {
        PatientName : patientName,
        appointmentDate: appointmentDate,
        appointmentTime : appointmentTime
    }
    transporter.sendMail({
        from: process.env.EMAILID,
        to: toEmail,
        subject: 'Gentle remainder..!!!',
        html: replacePlaceholders(htmlTemplate, placeHolders),
        attachments: [{
            filename: 'register.jpg',
            content: imageAttachment,
            encoding: 'base64',
            cid: 'RegisterImage'
        }],
    }).then(info => {
        console.log('Email sent:', info.messageId);
    }).catch(error => {
        console.error('Error:', error);
    });
}



