
const router = require('express').Router();
let Section = require('../models/addSection.model');

//to get the Sections of table
router.route('/').get((req, res) => {
    Section.find()
        .then(Section => res.json(Section))
        .catch(err => res.status(400).json('Error: '+ err));
});

//to add new Section
router.route('/add').post((req, res) => {
    const newSection = new Section({
        sectionName: req.body.sectionName
    });

    newSection.save()
        .then(() => res.json('New Section Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//for finding the id
router.route('/:id').get((req, res) => {
    Section.findById(req.params.id)
      .then(Section => res.json(Section))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//for deleting
router.route('/delete/:id').delete((req, res) => {
    Section.findByIdAndDelete(req.params.id)
      .then(() => res.json('Section deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//for editing rows
router.route('/update/:id').post((req, res) => {
    Section.findById(req.params.id)
      .then(Section => {
        Section.sectionName = req.body.sectionName
        Section.save()
          .then(() => res.json('Section updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//for all route files
module.exports = router;
