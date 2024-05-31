const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const sequelize = require("./config/database.js");
const {syncAndAddDcotor, syncAndAddPatient, syncAndAddUsers} = require("./config/InitialUsers.js");
const {createViews} = require("./models/views/dbviews.js");

//server app
const app = express();

// Specify the client URL in the CORS options
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your client URL if different
    optionsSuccessStatus: 200
};

// Apply CORS with the specified options
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//sequlize connection 
sequelize.sync({ force: false }).then(async () => {
    await syncAndAddUsers();
    await syncAndAddDcotor();
    await syncAndAddPatient();
    await createViews();
    console.log("SEQULIZED SUCESSFULLY >>>----->>>----->>>");
}).catch((err) => console.log(err));

require("./routes/doctors.routes.js")(app)
require("./routes/patients.routes.js")(app)
require("./routes/appointments.routes.js")(app)
require("./routes/medicalRecords.routes.js")(app)
require("./routes/prescriptions.routes.js")(app)
require("./routes/auth.routes.js")(app)

app.listen(4000, () => {
    console.log(`Server running at 4000`);
});

