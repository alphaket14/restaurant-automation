
const router = require('express').Router();
let Topping = require('../models/toppings.model');
//to get the Category table
router.route('/').get((req, res) => {
    Topping.find()
        .then(Topping => res.json(Topping))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const rows = req.body.rows;
    const newTopping = new Topping({
        rows,
    });

    newTopping.save()
        .then(() => res.json('New Topping Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    Topping.findById(req.params.id)
      .then(Topping => res.json(Topping))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    Topping.findByIdAndDelete(req.params.id)
      .then(() => res.json('Topping deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    Topping.findById(req.params.id)
      .then(topping => {
        topping.rows = req.body.rows;
        console.log(req.body.rows);
        topping.save()
          .then(() => res.json('topping updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
