const router = require('express').Router();
let Designation = require('../models/designation.model');
//to get the Category table
router.route('/').get((req, res) => {
    Designation.find()
        .then(Designation => res.json(Designation))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const rows = req.body.rows;
    const newDesignation = new Designation({
        rows,
    });

    newDesignation.save()
        .then(() => res.json('New Designation Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    Designation.findById(req.params.id)
      .then(Designation => res.json(Designation))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    Designation.findByIdAndDelete(req.params.id)
      .then(() => res.json('Designation deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    Designation.findById(req.params.id)
      .then(Designation => {
        Designation.rows = req.body.rows;
        console.log(req.body.rows);
        Designation.save()
          .then(() => res.json('Designation updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;

