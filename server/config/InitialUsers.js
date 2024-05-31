const users = require("../models/users.model");
const patients = require("../models/patients.model");
const doctors = require("../models/doctors.model");
const sequelize = require("./database");

async function syncAndAddUsers() {
    try {
        await sequelize.sync();
        // Check if the user already exists
        const user1 = await users.findOne({ where: { UserEmail: "sai@gmail.com" } });
        if (!user1) {
            // Create a new user
            const newUser = await users.create({ UserEmail: "sai@gmail.com", UserPassword: "sai1234", UserRole: "patient" });
            console.log('User 1 created:', newUser.UserEmail);
        }
        const user2 = await users.findOne({ where: { UserEmail: "kavin@gmail.com" } });
        if (!user2) {
            // Create a new user
            const newUser = await users.create({ UserEmail: "kavin@gmail.com", UserPassword: "kavin123", UserRole: "doctor" });
            console.log('User created:', newUser.UserEmail);
        }
    } catch (error) {
        console.error('Error syncing or adding user:', error);
    }
}
async function syncAndAddDcotor() {
    try {
        await sequelize.sync();
        // Check if the user already exists
        const doctor = await doctors.findOne({ where: { DoctorName: "Kavinraj K" } });
        if (!doctor) {
            // Create a new user
            const newDoctor = await doctors.create({ DoctorName: "Kavinraj K", DoctorDesignation: "Senior doctor", DoctorQualification: "MBBS", DoctorMobile: "9754321781", DoctorAddress: "Sathy, erode", DoctorStatus: "Available", UserId: 2 });
            console.log('User created:', newDoctor.DoctorName);
        }
    } catch (error) {
        console.error('Error syncing or adding user:', error);
    }
}
async function syncAndAddPatient() {
    try {
        await sequelize.sync();
        // Check if the user already exists
        const patient = await patients.findOne({ where: { PatientName: "Sai Prashanth K" } });
        if (!patient) {
            // Create a new user
            const newPatient = await patients.create({ PatientName: "Sai Prashanth K", PatientAge: 22, PatientGender: "male", PatientDOB: "26-03-2001", PatientMobile: "9754321781", PatientBloodGroup: "B+ve", PatientAddress: "Sathy, erode", PatientAccountStatus: "true", UserId: 1 });
            console.log('User created:', newPatient.PatientName);
        }
    } catch (error) {
        console.error('Error syncing or adding user:', error);
    }
}


module.exports = {syncAndAddDcotor, syncAndAddPatient,syncAndAddUsers}