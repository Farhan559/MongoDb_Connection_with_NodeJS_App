const mongoose = require('mongoose');

    const EmployeeSchema = new mongoose.Schema({
        employeeId: Number,
        name: String,
        Designation:String
    });

        module.exports = EmployeeSchema;