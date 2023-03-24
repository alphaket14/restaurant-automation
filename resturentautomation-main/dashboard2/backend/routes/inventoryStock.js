const router = require('express').Router();
let inventoryStock = require('../models/inventstock.model');
//to get the Category table
router.route('/').get((req, res) => {
    inventoryStock.find()
        .then(inventoryStock => res.json(inventoryStock))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const rows = req.body.rows;
    const alert_no = req.body.alert_no;
    const stockValue = req.body.stockValue;
    const newinventoryStock = new inventoryStock({
        rows,
        alert_no,
        stockValue,
    });

    newinventoryStock.save()
        .then(() => res.json('New inventoryStock Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    inventoryStock.findById(req.params.id)
      .then(inventoryStock => res.json(inventoryStock))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    inventoryStock.findByIdAndDelete(req.params.id)
      .then(() => res.json('inventStock deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    inventoryStock.findById(req.params.id)
      .then(stockitem => {
        stockitem.rows = req.body.rows;
        stockitem.alert_no = req.body.alert_no;
        stockitem.stockValue = req.body.stockValue;
        console.log(req.body.rows);
        stockitem.save()
          .then(() => res.json('stockitem updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
