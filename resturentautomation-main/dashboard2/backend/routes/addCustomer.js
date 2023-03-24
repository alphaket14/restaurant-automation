
const router = require('express').Router();
let Customer = require('../models/addCustomer.model');

//to get the Customer List
router.route('/').get((req, res) => {
    Customer.find()
        .then(Customer => res.json(Customer))
        .catch(err => res.status(400).json('Error: '+ err));
});

//to add new Customer
router.route('/add').post((req, res) => {
    const custfname = req.body.custfname;
    const custlname = req.body.custlname;
    const email = req.body.email;
    const phone = req.body.phone;
    const orderdetails =req.body.orderdetails;
    const dob = req.body.dob;
    const doa = req.body.doa;
    const address = req.body.address;
    const pincode = req.body.pincode;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const status = req.body.status;
    const newCustomer = new Customer({
        custfname, custlname, email, phone, orderdetails,dob,doa,address, pincode, city, state, country, status
    });

    newCustomer.save()
        .then(() => res.json('New Customer Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//for finding the id
router.route('/:id').get((req, res) => {
    Customer.findById(req.params.id)
      .then(Customer => res.json(Customer))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//for deleting
router.route('/delete/:id').delete((req, res) => {
    Customer.findByIdAndDelete(req.params.id)
      .then(() => res.json('Customer deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//for editing rows
router.route('/update/:id').post((req, res) => {
    Customer.findById(req.params.id)
      .then(Customer => {
        Customer.custfname=req.body.custfname,
        Customer.custlname=req.body.custlname,
        Customer.email  =req.body.email,
        Customer.phone  =req.body.phone,
        Customer.orderdetails =req.body.orderdetails,
        Customer.dob = req.body.dob,
        Customer.doa = req.body.doa,
        Customer.address = req.body.address,
        Customer.city = req.body.city,
        Customer.pincode = req.body.pincode,
        Customer.state = req.body.state,
        Customer.country = req.body.country,
        Customer.status = req.body.status,
        Customer.save()
          .then(() => res.json('Customer updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
