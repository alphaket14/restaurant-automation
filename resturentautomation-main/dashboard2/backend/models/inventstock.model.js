const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const inventoryStockSchema = new Schema({
    rows: [{
        code: { type: String, required: false,},
        Catagory: { type: String, required: false,},
        itemname: { type: String, required: false,}, 
        unit: [],
        unitPrice: { type: Number, required: false,},
        currStock: { type: Number, required: false,},
        totPrice: { type: Number, required: false,},
        alertLevel: { type: Number, required: false,},
        status: [],
        unitRowStock: { type: String, required: false,}, 
    }],
    alert_no: { type: Number, required: false,},
    stockValue: { type: Number, required: false,},
},
)
const inventoryStock = mongoose.model('inventoryStock', inventoryStockSchema);
module.exports = inventoryStock;

