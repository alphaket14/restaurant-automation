const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    sectionName:{type: String, required: true}
})

const section = mongoose.model('Section', sectionSchema);
module.exports = section;