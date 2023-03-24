
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonVarSchema = new Schema({
    addemployee_pointer : { type: Number },
},
)
const commonVar = mongoose.model('commonVar', commonVarSchema);
module.exports = commonVar;
