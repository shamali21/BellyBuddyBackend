const router = require('express').Router();
let Menu = require('../models/menu.model');

router.route('/').get((req, res) => {
    Menu.find()
        .then(menus => res.json(menus))//jason users
        .catch(err => res.status(400).json('Error:' + err));

}); //first route hhtp get requies 

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newMenu = new Menu({
        username,
        description,
        duration,
        date,
    });

    newMenu.save()
        .then(() => res.json("Menu addded!"))
        .catch(err => res.status(400).json('Error:'+ err));



}); //incoming hhtp post requiest 

router.route('/:id').get((req , res) => {
    Menu.findById(req.params.id)
     .then(menu => res.json(menu))
     .catch(err => res.status(400).json('Error:' + err));

});

router.route('/:id').delete((req, res) => {
    Menu.findByIdAndDelete(req.params.id)
     .then(() => res.json("Menu Deleted."))
     .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req,res) => {
    Menu.findById(req.params.id)
     .then(menu => {
         menu.username = req.body.username;
         menu.description = req.body.description;
         menu.duration = Number(req.body.duration);
         menu.data = Date.parse(req.body.date);

         menu.save()
          .then(() => res.json('Menu updated!'))
          .catch(err => res.status(400).json('Error:' + err));
     })
        .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;