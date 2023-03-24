const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fooditemSchema = new Schema({
    rows: [{
    image: { data: Buffer, type: String, required: false,},
    orderType: { type: String, required: false,},
    parentCategory: [],
    categoryName: { type: String, required: false,},
    foodName: { type: String, required: false,},
    discount: [],
    price: { type: Number, required: false,},
    status: [],
    toppings: [],
    addons: [],
    variants: [{
        varname: { type: String, required: false,},
        optarr: [{
            option: { type: String, required: false,},
            price: { type: Number, required: false,},
        }]
    }]
    }],
},
)
const Fooditem = mongoose.model('Fooditem', fooditemSchema);
module.exports = Fooditem;
