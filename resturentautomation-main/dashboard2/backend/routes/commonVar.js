const router = require('express').Router();
// let CommonVar = require('../models/commonVar.model');
//to get the commonVar table
router.route('/').get((req, res) => {
    CommonVar.find()
        .then(CommonVar => res.json(CommonVar))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const addemployee_pointer = Number(req.body.addemployee_pointer);
    const newCommonVar = new CommonVar({
        addemployee_pointer,
    });

    newCommonVar.save()
        .then(() => res.json('New Common Variable Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for finding the id
router.route('/:id').get((req, res) => {
    CommonVar.findById(req.params.id)
      .then(CommonVar => res.json(CommonVar))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for deleting
router.route('/:id').delete((req, res) => {
    CommonVar.findByIdAndDelete(req.params.id)
      .then(() => res.json('Common Variable deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for editing rows
router.route('/update/:id').post((req, res) => {
    CommonVar.findById(req.params.id)
      .then(commonVar => {
        commonVar.addemployee_pointer = req.body.addemployee_pointer;
        console.log(req.body.addemployee_pointer);
        commonVar.save()
          .then(() => res.json('commonVar updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;