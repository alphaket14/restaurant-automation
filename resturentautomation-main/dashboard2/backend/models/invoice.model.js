const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const invoiceSchema = new Schema({
    name: { type: String, required: true, },
    gst: { type: Number, required: true, },
    fssai: { type: Number, required: true, },
    state: { type: String, required: true, },
    city: { type: String, required: true, },
    pincode: { type: Number, required: true, },
    address: { type: String, required: true, },
    order_no: { type: Number, required: true, },
    waiter: { type: String, required: true, },
    admin: { type: String, required: false, },
    invoice: { type: String, required: true, },
    coupon_disc: { type: Number, required: true, },
    gst_per: { type: Number, required: true, },
    sgst: { type: Number, required: true, },
    cgst: { type: Number, required: true, },
    igst: { type: Number, required: true, },
    charges: { type: Number, required: true, },
    footer: { type: String, required: true, },
    contact: { type: Number, required: true, },
    email: { type: String, required: true, },
    cust_city: {type: String, required: true},
    cust_name: { type: String, required: true},
    cust_no: {type:Number, required:true},
    order_type: {type: String, required:true},
    order_from: {type: String, required:true},
    table_no: {type: String, required:true},
    payment_mode: {type: String, required:false},

},
    { timestamps: true,
});
const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;