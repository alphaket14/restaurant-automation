const router = require('express').Router();
let Unit = require('../models/inventoryUnit.model');
//to get the commonVar table
router.route('/').get((req, res) => {
    Unit.find()
        .then(Unit => res.json(Unit))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const rows = req.body.rows;
    const newUnits = new Unit({
        rows,
    });

    newUnits.save()
        .then(() => res.json('New Units Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    Unit.findById(req.params.id)
      .then(Unit => res.json(Unit))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    Unit.findByIdAndDelete(req.params.id)
      .then(() => res.json('Unit deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    Unit.findById(req.params.id)
      .then(Unit => {
        Unit.rows = req.body.rows;
        console.log(req.body.rows);
        Unit.save()
          .then(() => res.json('Unit updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
