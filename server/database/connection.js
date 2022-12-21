const mongoose = require('mongoose');
const uri =
"#"

async function connectDB(){
    try{
        await mongoose.connect(uri);
        console.log('mongodb connected successfully');
    }catch(error){
        console.log(error);
        
}}


module.exports = connectDB
