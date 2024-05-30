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
