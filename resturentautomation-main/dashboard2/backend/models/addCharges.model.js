const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chargeSchema = new Schema({
    tax : {type:String, required: true},
    menu: [{type:String, required: true}] ,
    order_type : [{type:String, required: true}],
    value_type : {type:String, required: true},
    value: {type:String, required: true},
    type: {type:String, required: true},
    desc: {type:String, required: true},
    status: {type:String, required: true}
})

const Charge = mongoose.model('Charges', chargeSchema);
module.exports = Charge;