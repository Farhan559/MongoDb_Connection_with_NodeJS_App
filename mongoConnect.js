const mongoose = require('mongoose');
const EmployeeModel = require('./employeeModel');

// Connection URL
const url = 'mongodb://127.0.0.1:27017/Company'; //


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;


db.once('open', async () => {
    try{
    console.log('Connected to MongoDB');
        const newRecord = new EmployeeModel({
            employeeId:"1",
            name:"Farhan",
            Designation:"Web Developer"
        })
       await newRecord.save();
       console.log('Record save successfully');
    }
        catch(error){
            console.error('Error saving Record'+error);
        }
        finally{
        mongoose.connection.close();        
        }
    });


db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});


module.exports = db;
