const router = require('express').Router();
const User = require('../models/user-model');

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    User.find({}, function(err, data) {
        // note that data is an array of objects, not a single object!
        res.render('family', {
            data: data
        });
    });
});

module.exports = router;
