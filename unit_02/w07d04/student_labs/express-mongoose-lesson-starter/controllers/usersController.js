var express = require('express');
var router = express.Router();
var User = require("../models/user");
var Item = require("../models/item");
// USERS INDEX ROUTE
router.get('/', function(req, res) {
    User.find({})
        .exec(function(err, users) {
            if(err) { console.log(err); }
            console.log(users);
            res.send(users);
        })
});
// USER SHOW ROUTE
router.get('/:id', function(req, res) {
    User.findById(req.params.id)
        .exec(function(err, user) {
            if(err) { console.log(err); }
            
            console.log(user);
            res.send(user);
        })
});
// USER CREATE ROUTE
router.post('/', function(req,res) {
    var user = new User({
        first_name: req.body.first_name,
        email: req.body.email,
        items: req.body.items
    });
    user.save(function(err, user) {
        if(err) { console.log(err); }
        console.log(user);
        res.send(user);
    });
});
// USER UPDATE ROUTE
router.patch('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        email: req.body.email
    }, {new: true})
        .exec(function(err, user) {
            if(err) { console.log(err); }
            console.log(user);
            res.send(user);
        })
});

// USER SHOW ROUTE


// USER CREATE ROUTE


// USER UPDATE ROUTE


// USER DESTROY


// ADD A NEW ITEM


// REMOVE AN ITEM


module.exports = router;
