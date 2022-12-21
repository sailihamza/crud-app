const mongoose = require('mongoose');

var shema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})

const Userdb=mongoose.model('userdb',shema) 
module.exports =Userdb;