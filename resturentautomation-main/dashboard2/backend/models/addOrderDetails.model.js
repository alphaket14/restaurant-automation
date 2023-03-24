const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addOrderDetails = new Schema({
    resName: { type: String, required: true,},
    resAddr: { type: String, required: true,},
    resCont: { type: String, required: true,},
    tableNo:{ type: String, required: true,},
    tableCapacity:{ type: Number, required: true,},
    instruction:{ type: String, required: true,},
    section:{ type: String, required: true,},
    order_type:{ type: String, required: true,},
    rows: [{
        sl: { type: Number, required: true,},
        qty:{ type: Number, required: true,},
        price:{ type: Number, required: true,},
        item:{ type: String, required: true,},
        total:{ type: Number, required: true,}
    }],
    paymentMode:{ type: String, required: true,},
    orderNo:{ type: String, required: true,},
    grandTotal:{ type: Number, required: true,},
    cgstAmt:{ type: Number, required: true,},
    sgstAmt:{ type: Number, required: true,},
    discAmt:{ type: Number, required: true,},
    customerFname:{ type: String, required: true,},
    customerLname:{ type: String, required: true,},
    custPhone:{ type: String, required: true,},
    custEmail:{ type: String, required: true,},
    custAddress:{ type: String, required: true,},
    invoiceNo:{ type: String, required: true,},
    waiter:{ type: String, required: true,},
    status:{type:String, required:true}
},
)
const orders = mongoose.model('orders', addOrderDetails);
module.exports = orders;
