const router = require('express').Router();
let FoodCategory = require('../models/categoryList.model');
//to get the Category table
router.route('/').get((req, res) => {
    FoodCategory.find()
        .then(FoodCategory => res.json(FoodCategory))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const rows = req.body.rows;
    const newFoodCategory = new FoodCategory({
        rows,
    });

    newFoodCategory.save()
        .then(() => res.json('New Food Category Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    FoodCategory.findById(req.params.id)
      .then(FoodCategory => res.json(FoodCategory))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    FoodCategory.findByIdAndDelete(req.params.id)
      .then(() => res.json('FoodCategory deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    FoodCategory.findById(req.params.id)
      .then(foodCategory => {
        foodCategory.rows = req.body.rows;
        console.log(req.body.rows);
        foodCategory.save()
          .then(() => res.json('foodCategory updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;