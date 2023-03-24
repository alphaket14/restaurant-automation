
const router = require('express').Router();
let Charge = require('../models/addCharges.model');

//to get the table List
router.route('/').get((req, res) => {
    Charge.find()
        .then(Charge => res.json(Charge))
        .catch(err => res.status(400).json('Error: '+ err));
});

//to add new Charge
router.route('/add').post((req, res) => {
    const tax = req.body.tax;
    const menu= req.body.menu;
    const order_type= req.body.order_type;
    const value_type= req.body.value_type;
    const value= req.body.value;
    const type= req.body.type;
    const desc= req.body.desc; 
    const  status =  req.body.status;
    const newTable = new Charge({
        tax, menu, order_type, value_type, value, type, desc, status
    });

    newTable.save()
        .then(() => res.json('New Charge Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//for finding the id
router.route('/:id').get((req, res) => {
    Charge.findById(req.params.id)
      .then(Charge => res.json(Charge))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//for deleting
router.route('/delete/:id').delete((req, res) => {
    Charge.findByIdAndDelete(req.params.id)
      .then(() => res.json('Charge deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//for editing rows
router.route('/update/:id').post((req, res) => {
    Charge.findById(req.params.id)
      .then(Charge => {
        Charge.tax=req.body.tax,
        Charge.menu  =req.body.menu,
        Charge.order_type  =req.body.order_type,
        Charge.value_type = req.body.value_type,
        Charge.value = req.body.value,
        Charge.type = req.body.type,
        Charge.desc = req.body.desc,
        Charge.status=req.body.status,
        Charge.save()
          .then(() => res.json('Charge updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
