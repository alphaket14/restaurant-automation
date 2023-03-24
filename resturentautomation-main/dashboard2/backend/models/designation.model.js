const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const designationSchema = new Schema({
    rows: [{
        designation: { type: String, required: false,},
        details: { type: String, required: false,},
    }],
},
)
const designation = mongoose.model('designation', designationSchema);
module.exports = designation;