var express = require('express');
var router = express.Router();

var Pet = require('../models/pet');


router.get('/', function (req, res) {
    res.json({
        status: 'ok'
    });
});

router.post('/pet', function (req, res) {
    var tags = undefined;
    if (req.body.tags) {
        tags = req.body.tags.split(',');
    }
    var pet = new Pet({
        name: req.body.name,
        slug: req.body.name,
        price: req.body.price,
        breed: req.body.breed,
        tags: tags
    });

    pet.save(function (err, data) {
        if (err) {
            console.log(err)
            res.status(500);
            return res.json({
                status: 'error',
                message: 'could not create pet'
            });
        }
        return res.json({
            status: 'ok',
            message: 'created new pet',
            pet: data
        });
    });
});

router.get('/pet', function (req, res) {
    Pet.find({}, function (err, data) {
        if (err) {
            res.status(500);
            return res.json({
                status: 'error',
                message: 'Coud not get pets'
            });
        }
        res.json(data);
    });
});

module.exports = router;