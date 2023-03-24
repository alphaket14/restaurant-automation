
const router = require('express').Router();
let Tax = require('../models/addTax.model');

//to get the table List
router.route('/').get((req, res) => {
    Tax.find()
        .then(Tax => res.json(Tax))
        .catch(err => res.status(400).json('Error: '+ err));
});

//to add new Tax
router.route('/add').post((req, res) => {
    const tax = req.body.tax;
    const menu= req.body.menu;
    const order_type= req.body.order_type;
    const value_type= req.body.value_type;
    const value= req.body.value;
    const type= req.body.type;
    const desc= req.body.desc; 
    const  status =  req.body.status;
    const newTable = new Tax({
        tax, menu, order_type, value_type, value, type, desc, status
    });

    newTable.save()
        .then(() => res.json('New Tax Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//for finding the id
router.route('/:id').get((req, res) => {
    Tax.findById(req.params.id)
      .then(Tax => res.json(Tax))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//for deleting
router.route('/delete/:id').delete((req, res) => {
    Tax.findByIdAndDelete(req.params.id)
      .then(() => res.json('Tax deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//for editing rows
router.route('/update/:id').post((req, res) => {
    Tax.findById(req.params.id)
      .then(Tax => {
        Tax.tax=req.body.tax,
        Tax.menu  =req.body.menu,
        Tax.order_type  =req.body.order_type,
        Tax.value_type = req.body.value_type,
        Tax.value = req.body.value,
        Tax.type = req.body.type,
        Tax.desc = req.body.desc,
        Tax.status=req.body.status,
        Tax.save()
          .then(() => res.json('Tax updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
