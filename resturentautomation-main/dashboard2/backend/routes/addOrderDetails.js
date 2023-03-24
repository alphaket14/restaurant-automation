
const router = require('express').Router();
let Order = require('../models/addOrderDetails.model');
//to get the orders
router.route('/').get((req, res) => {
    Order.find()
        .then(Order => res.json(Order))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to get the orders
router.route('/new').get((req, res) => {
    Order.find({status:"New"})
        .then(Order => res.json(Order))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to get the preparing orders
router.route('/prepare').get((req, res) => {
    Order.find({status:"Preparing"})
        .then(Order => res.json(Order))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to get the Ready orders
router.route('/ready').get((req, res) => {
    Order.find({status:"Ready"})
        .then(Order => res.json(Order))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to get the Payment due orders
router.route('/paymentdueorders').get((req, res) => {
    Order.find({status:"Payment Due"})
        .then(Order => res.json(Order))
        .catch(err => res.status(400).json('Error: '+ err));
});

//to add new Order
router.route('/add').post((req, res) => {
    const resName = req.body.resName;
    const resAddr = req.body.resAddr;
    const resCont = req.body.resCont;
    const  tableNo = req.body.tableNo;
    const  tableCapacity = req.body.tableCapacity;
    const  instruction = req.body.instruction;
    const  section =req.body.section;
    const  order_type =req.body.order_type;
    const  rows = req.body.rows;
    const  paymentMode = req.body.paymentMode;
    const  orderNo = req.body.orderNo;
    const  grandTotal = req.body.grandTotal;
    const  cgstAmt = req.body.cgstAmt;
    const  sgstAmt = req.body.sgstAmt;
    const  discAmt = req.body.discAmt;
    const  customerFname = req.body.customerFname;
    const  customerLname = req.body.customerLname;
    const  custPhone = req.body.custPhone;
    const  custEmail = req.body.custEmail;
    const  custAddress = req.body.custAddress;
    const  invoiceNo = req.body.invoiceNo;
    const  waiter = req.body.waiter;
    const  status = req.body.status;
    const newOrder = new Order({
        resName,
        resAddr,
        resCont,
        tableNo,
        tableCapacity,
        instruction,
        section,
        order_type,
        rows,
        paymentMode,
        orderNo,
        grandTotal,
        cgstAmt,
        sgstAmt,
        discAmt,
        customerFname,
        customerLname,
        custPhone,
        custEmail,
        custAddress,
        invoiceNo,
        waiter,
        status
    });

    newOrder.save()
        .then(() => res.json('New Order Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
      .then(Order => res.json(Order))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
      .then(() => res.json('Order deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    Order.findById(req.params.id)
      .then(Order => {
        Order.resName = req.body.resName;
        Order.resAddr = req.body.resAddr;
        Order.resCont = req.body.resCont;
        Order.tableNo = req.body.tableNo;
        Order.tableCapacity = req.body.tableCapacity;
        Order.instruction = req.body.instruction;
        Order.section =req.body.section;
        Order.order_type = req.body.order_type;
        Order.rows = req.body.rows;
        Order.paymentMode = req.body.paymentMode;
        Order.orderNo = req.body.orderNo;
        Order.grandTotal = req.body.grandTotal;
        Order.cgstAmt = req.body.cgstAmt;
        Order.sgstAmt = req.body.sgstAmt;
        Order.discAmt = req.body.discAmt;
        Order.customerFname = req.body.customerFname;
        Order.customerLname = req.body.customerLname;
        Order.custPhone = req.body.custPhone;
        Order.custEmail = req.body.custEmail;
        Order.custAddress = req.body.custAddress;
        Order.invoiceNo = req.body.invoiceNo;
        Order.waiter = req.body.waiter;
        Order.status = req.body.status
        Order.save()
          .then(() => res.json('Order updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
  