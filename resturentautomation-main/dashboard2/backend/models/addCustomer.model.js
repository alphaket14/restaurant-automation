const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    custfname:{type:String, required:true},
    custlname:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    orderdetails:{type:String, required:true},
    dob:{type:String, required:true},
    doa:{type:String, required:true},
    address:{type:String, required:true},
    city:{type:String, required:true},
    pincode:{type:Number, required:true},
    state:{type:String, required:true},
    country:{type:String, required:true},
    status:{type:String, required:true},
})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;