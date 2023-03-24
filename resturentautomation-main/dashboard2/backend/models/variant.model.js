const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const variantSchema = new Schema({
    parentCategory: { type: String, required: true,},
    foodCategory: { type: String, required: true,},
    foodName: { type: String, required: true,},
    discount: { type: String, required: true,},
    option: { type: Object, required: true,},
    price: { type: Number, required: true,},
    status: { type: String, required: true,},
},
{ timestamps: true,
})
const Variant = mongoose.model('Variant', variantSchema);
module.exports = Variant;