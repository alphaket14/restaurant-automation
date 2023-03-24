const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');
//to get the Restaurant table
router.route('/').get((req, res) => {
    Restaurant.find()
        .then(Restaurant => res.json(Restaurant))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const email = req.body.email;
    const mobile = Number(req.body.mobile);
    const phone = Number(req.body.phone);
    const address = req.body.address;
    const powerby = req.body.powerby;
    const newRestaurant = new Restaurant({
        email,
        mobile,
        phone,
        address,
        powerby,
    });
    newRestaurant.save()
        .then(() => res.json('New Restaurant registered'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//for all route files
module.exports = router;