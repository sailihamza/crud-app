const mongoose = require('mongoose');
const uri =
"mongodb+srv://hamzacrud:NyLsOzBwsgbAhGC5@cluster0.sc3spf1.mongodb.net/?retryWrites=true&w=majority"

async function connectDB(){
    try{
        await mongoose.connect(uri);
        console.log('mongodb connected successfully');
    }catch(error){
        console.log(error);
        
}}


module.exports = connectDB