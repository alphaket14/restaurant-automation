const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const inventoryCategorySchema = new Schema({
    rows: [{
        image : { data: Buffer, type: String, required: false,},
        categoryName: { type: String, required: false,},
        description: { type: String, required: false,},
    }],
},
)
const inventoryCategory = mongoose.model('inventoryCategory', inventoryCategorySchema);
module.exports = inventoryCategory;
