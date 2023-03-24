
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const toppingsSchema = new Schema({
    rows: [{
        toppingName: { type: String, required: false,},
        price: { type: Number, required: false,},
        status: []
    }],
},
)
const toppings = mongoose.model('toppings', toppingsSchema);
module.exports = toppings;