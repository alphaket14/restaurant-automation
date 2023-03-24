const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const inventoryUnitSchema = new Schema({
    rows: [{
        unitName: { type: String, required: false,},
        description: { type: String, required: false,},
    }],
},
)
const inventoryUnit = mongoose.model('inventoryUnit', inventoryUnitSchema);
module.exports = inventoryUnit;
