const router = require('express').Router();
let Category = require('../models/inventoryCategory.model');
//to get the commonVar table
router.route('/').get((req, res) => {
    Category.find()
        .then(Category => res.json(Category))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const rows = req.body.rows;
    const newCategory = new Category({
        rows,
    });

    newCategory.save()
        .then(() => res.json('New Category Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    Category.findById(req.params.id)
      .then(Category => res.json(Category))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    Category.findByIdAndDelete(req.params.id)
      .then(() => res.json('Category deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    Category.findById(req.params.id)
      .then(Category => {
        Category.rows = req.body.rows;
        console.log(req.body.rows);
        Category.save()
          .then(() => res.json('Category updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;