const router = require('express').Router();
let Fooditem = require('../models/fooditem.model');
//to get the commonVar table
router.route('/').get((req, res) => {
    Fooditem.find()
        .then(Fooditem => res.json(Fooditem))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const rows = req.body.rows;
    const newFooditems = new Fooditem({
        rows,
    });

    newFooditems.save()
        .then(() => res.json('New Fooditems Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    Fooditem.findById(req.params.id)
      .then(Fooditem => res.json(Fooditem))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    Fooditem.findByIdAndDelete(req.params.id)
      .then(() => res.json('Fooditem deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    Fooditem.findById(req.params.id)
      .then(Fooditem => {
        Fooditem.rows = req.body.rows;
        console.log(req.body.rows);
        Fooditem.save()
          .then(() => res.json('Fooditem updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;

