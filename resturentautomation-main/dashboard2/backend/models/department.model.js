const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const departmentSchema = new Schema({
    rows: [{
        department: { type: String, required: false,},
        details: { type: String, required: false,},
    }],
},
)
const department = mongoose.model('department', departmentSchema);
module.exports = department;