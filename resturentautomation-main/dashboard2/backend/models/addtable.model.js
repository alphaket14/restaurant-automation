const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    section:{type:String, required: true},
    tableNo:{type:String, required:true},
    capacity:{type:String, required:true},
    status:{type:String, required:true},
})

const Table = mongoose.model('Table', tableSchema);
module.exports = Table;