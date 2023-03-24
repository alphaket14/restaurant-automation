const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const availabilitySchema = new Schema({
    image: { data: Buffer, type: String, required: true,},
    orderType: { type: String, required: true,},
    parentCategory: { type: String, required: true,},
    foodCategory: { type: String, required: true,},
    foodItem: { type: String, required: true,},
    weekdays: { type: String, required: true,},
    option: { type: String, required: true,},
    price: { type: Number, required: true,},
},
{ timestamps: true,
})
const Availability = mongoose.model('Availability', availabilitySchema);
module.exports = Availability;