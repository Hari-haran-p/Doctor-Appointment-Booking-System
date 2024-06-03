const doctors = require("../models/doctors.model");

exports.findAll = async(req, res) => {
    try{
        const doctor = await doctors.findAll();
        res.status(201).json({success: true, doctors: doctor});

    }catch(error){
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.findOne = async(req, res) => {
    const id = req.params.id;
    try{
        const doctor = await doctors.findByPk(id);
        res.status(201).json({success: true, doctor: doctor});
    }catch(error){
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.update = async(req, res)=>{
    const id = req.query.id;
    const status = req.query.status;
    try{
        const doctor = await doctors.update({DoctorStatus: status}, {where:{DoctorId:id}});
        res.status(201).json({success: true, message: "Status updated sucessfully"});
    }catch(error){
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

