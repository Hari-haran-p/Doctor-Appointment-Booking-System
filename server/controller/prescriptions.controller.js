const { where } = require("sequelize");
const prescriptions =  require("../models/prescriptions.model.js");

exports.patient_findAll = async(req, res)=>{
    const id = req.params.id;
    try {
        const prescription = await prescriptions.findAll({ where : { patient_id : id}});
        res.status(201).json({ success: true, prescriptions: prescription });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}