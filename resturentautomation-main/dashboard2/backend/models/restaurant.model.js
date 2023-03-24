const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    email: { type: String, required: true, },
    mobile: { type: Number, required: true, },
    phone: { type: Number, required: true, },
    address: { type: String, required: true, },
    powerby: { type: String, required: true, },
},
    { timestamps: true,
});
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;