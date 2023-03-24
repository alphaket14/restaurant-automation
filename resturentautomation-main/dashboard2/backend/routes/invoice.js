const router = require('express').Router();
let Invoice = require('../models/invoice.model');
//to get the Restaurant table
router.route('/').get((req, res) => {
    Invoice.find()
        .then(Invoice => res.json(Invoice))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const gst = Number(req.body.gst);
    const fssai = Number(req.body.fssai);
    const state = req.body.state;
    const city = req.body.city;
    const pincode = Number(req.body.pincode);
    const address = req.body.address;
    const order_no = Number(req.body.order_no);
    // const invoice_no = Number(req.body.invoice_no);
    const waiter = req.body.waiter;
    const admin = req.body.admin;
    const invoice = req.body.invoice;
    const coupon_disc = Number(req.body.coupon_disc);
    const gst_per = Number(req.body.gst_per);
    const sgst = Number(req.body.sgst);
    const cgst = Number(req.body.cgst);
    const igst = Number(req.body.igst);
    const charges = Number(req.body.charges);
    const footer = req.body.footer;
    const contact = Number(req.body.contact);
    const email = req.body.email;
    const cust_city = req.body.cust_city;
    const cust_name = req.body.cust_name;
    const cust_no = Number(req.body.cust_no);
    const order_type = req.body.order_type;
    const order_from = req.body.order_from;
    const table_no = req.body.table_no;
    const payment_mode = req.body.payment_mode;
    const newInvoice = new Invoice({
        name,
        gst,
        fssai,
        state,
        city,
        pincode,
        address,
        order_no,
        waiter,
        admin,
        invoice,
        coupon_disc,
        gst_per,
        sgst,
        cgst,
        igst,
        charges,
        footer,
        contact,
        email,
        cust_city,
        cust_name,
        cust_no,
        order_type,
        order_from,
        table_no,
        payment_mode
    });
    newInvoice.save()
        .then(() => res.json('New Invoice added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for all route files
module.exports = router;