
const router = require('express').Router();
let Addon = require('../models/addon.model');
//to get the Category table
router.route('/').get((req, res) => {
    Addon.find()
        .then(Addon => res.json(Addon))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const rows = req.body.rows;
    const newAddon = new Addon({
        rows,
    });

    newAddon.save()
        .then(() => res.json('New Addon Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    Addon.findById(req.params.id)
      .then(Addon => res.json(Addon))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    Addon.findByIdAndDelete(req.params.id)
      .then(() => res.json('Addon deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    Addon.findById(req.params.id)
      .then(Addon => {
        Addon.rows = req.body.rows;
        console.log(req.body.rows);
        Addon.save()
          .then(() => res.json('Addon updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
