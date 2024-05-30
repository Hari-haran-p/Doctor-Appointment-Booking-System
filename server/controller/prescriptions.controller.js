const prescriptions =  require("../models/prescriptions.model.js");

exports.findAll = async(req, res)=>{
    try {
        const prescription = await prescriptions.findAll();
        res.status(201).json({ success: true, prescriptions: prescription });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}