
const router = require('express').Router();
let Table = require('../models/addtable.model');

//to get the table List
router.route('/').get((req, res) => {
    Table.find()
        .then(Table => res.json(Table))
        .catch(err => res.status(400).json('Error: '+ err));
});

// get the vacant tables
router.route('/vacant').get((req, res) => {
  Table.find({status:"Vacant"})
      .then(Table => res.json(Table))
      .catch(err => res.status(400).json('Error: '+ err));
});
// get the booked tables
router.route('/booked').get((req, res) => {
  Table.find({status:"Booked"})
      .then(Table => res.json(Table))
      .catch(err => res.status(400).json('Error: '+ err));
});

// get the payment due tables
router.route('/paymentdue').get((req, res) => {
  Table.find({status:"Payment Due"})
      .then(Table => res.json(Table))
      .catch(err => res.status(400).json('Error: '+ err));
});

// get the section wise vacant table count
router.route('/count').get((req,res)=>{
  Table.aggregate([
    { $match: { status: "Vacant" } },
    { $group: { _id: "$section", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]).then(Table => res.json(Table))
  .catch(err => res.status(400).json('Error: '+ err));
});

// get the section wise booked count
router.route('/bookedcount').get((req,res)=>{
  Table.aggregate([
    { $match: { status: "Booked" } },
    { $group: { _id: "$section", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]).then(Table => res.json(Table))
  .catch(err => res.status(400).json('Error: '+ err));
});

// get the section wise payment due count
router.route('/paymentduecount').get((req,res)=>{
  Table.aggregate([
    { $match: { status: "Payment Due" } },
    { $group: { _id: "$section", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]).then(Table => res.json(Table))
  .catch(err => res.status(400).json('Error: '+ err));
});

//to add new Table
router.route('/add').post((req, res) => {
    const  section = req.body.section;
    const  tableNo = req.body.tableNo;
    const  capacity = req.body.capacity;
    const  status = req.body.status;
    const newTable = new Table({
        section,
        tableNo,
        capacity,
        status,
    });

    newTable.save()
        .then(() => res.json('New Table Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//for finding the id
router.route('/:id').get((req, res) => {
    Table.findById(req.params.id)
      .then(Table => res.json(Table))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//for deleting
router.route('/delete/:id').delete((req, res) => {
    Table.findByIdAndDelete(req.params.id)
      .then(() => res.json('Table deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//for editing rows
router.route('/update/:id').post((req, res) => {
    Table.findById(req.params.id)
      .then(Table => {
        Table.section=req.body.section,
        Table.tableNo=req.body.tableNo,
        Table.capacity=req.body.capacity,
        Table.status=req.body.status,
        Table.save()
          .then(() => res.json('Table updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
