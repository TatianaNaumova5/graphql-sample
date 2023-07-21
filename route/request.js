const express = require('express');
const router = express.Router();
const Users = require('../model/users');


// use the request query to get the userName
router.get('/users',function(req,res,next){
    Users.find({ "firstName": req.query.name }).then(function(users){
            console.log(users);
            res.send(users);
        }

    ).catch(next);
});

module.exports = router;