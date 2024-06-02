const sequelize = require("../../config/database")

const AppointmentViewQuery = `CREATE VIEW AppointmentView AS 
                 SELECT 
                    T1.AppointmentId, 
                    T1.AppointmentDate, 
                    T1.AppointmentReason, 
                    T1.AppointmentTime, 
                    T1.AppointmentStatus, 
                    T1.AppointmentHealthStatus, 
                    T1.AppointmentRemark, 
                    T1.MedicalRecordStatus, 
                    T1.MedicalRecordId,
                    T2.DoctorId, 
                    T2.DoctorName, 
                    T2.DoctorDesignation,
                    T2.DoctorStatus,
                    T2.DoctorMobile,
                    T3.PatientId, 
                    T3.PatientName,
                    T3.PatientGender,
                    T3.PatientBloodGroup,
                    T3.PatientDOB,
                    T3.PatientAge,
                    T3.PatientAddress,
                    T3.PatientMobile
                FROM 
                    appointments as T1
                JOIN 
                    doctors AS T2 ON T1.DoctorId = T2.DoctorId
                JOIN
                    patients AS T3 ON T1.PatientId = T3.PatientId
                `

const PrescriptionViewQuery = `CREATE VIEW PrescriptionView AS
                          SELECT
                            T1.PrescriptionId,
                            T1.Disease,
                            T1.Prescription,
                            T1.PrescriptionRemark,
                            T1.createdAt,
                            T2.DoctorId,
                            T2.DoctorName,
                            T2.DoctorDesignation,
                            T2.DoctorStatus,
                            T2.DoctorMobile,
                            T3.PatientId,
                            T3.PatientName,
                            T3.PatientGender,
                            T3.PatientBloodGroup,
                            T3.PatientDOB,
                            T3.PatientAge,
                            T3.PatientAddress,
                            T3.PatientMobile,
                            T4.AppointmentId,
                            T4.AppointmentStatus,
                            T4.AppointmentDate,
                            T4.AppointmentTime,
                            T4.AppointmentReason
                        FROM
                            prescriptions AS T1
                        JOIN
                            doctors AS T2 ON T1.DoctorId = T2.DoctorId
                        JOIN
                            patients AS T3 ON T1.PatientId = T3.PatientId
                        JOIN
                            appointments AS T4 ON T1.AppointmentId = T4.AppointmentId`

const MedicalRecordViewQuery = `CREATE VIEW MedicalRecordView AS
                                SELECT
                                    T1.MedicalRecordId,
                                    T1.Height,
                                    T1.Weight,
                                    T1.Pressure,
                                    T1.temperature,
                                    T1.MedicalRecordRemark,
                                    T1.Symptoms,
                                    T1.Medications,
                                    T1.Treatments,
                                    T2.PatientId,
                                    T2.PatientName,
                                    T2.PatientMobile,
                                    T3.DoctorId,
                                    T3.DoctorName
                                FROM 
                                    medicalrecords AS T1
                                JOIN
                                    patients AS T2 ON T1.PatientId = T2.PatientId
                                JOIN
                                    doctors AS T3 ON T1.DoctorId = T3.DoctorId`

async function viewExist(view) {
    const [results] = await sequelize.query(`
    SELECT TABLE_NAME 
    FROM information_schema.VIEWS 
    WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '${view}';
  `);
    return results.length > 0;
}

async function createViews() {
    try {
        let flag = await viewExist("AppointmentView");
        if (!flag) {
            await sequelize.query(AppointmentViewQuery);
        }
        flag = await viewExist("PrescriptionView");
        if(!flag){
            await sequelize.query(PrescriptionViewQuery)
        }
        flag = await viewExist("MedicalRecordView")
        if(!flag){
            await sequelize.query(MedicalRecordViewQuery)
        }
        console.log("Views created sucessfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { createViews }