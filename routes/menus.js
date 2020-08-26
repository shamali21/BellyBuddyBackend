const router = require('express').Router();
let Restaurant = require('../models/menus.model');

router.route('/').get((req, res) => {
    Restaurant.find()
        .then(Restaurants => res.json(Restaurants))//jason users
        .catch(err => res.status(400).json('Error:' + err));

}); //first route http get requies 

module.exports = router;