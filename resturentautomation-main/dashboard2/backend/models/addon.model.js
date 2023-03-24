const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addonsSchema = new Schema({
    rows: [{
        addonName: { type: String, required: false,},
        price: { type: Number, required: false,},
        status: []
    }],
},
)
const addons = mongoose.model('addons', addonsSchema);
module.exports = addons;
