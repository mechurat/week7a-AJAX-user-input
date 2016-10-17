var express = require('express');
var router = express.Router();

var path = require('path');
//Multer
var multer = require('multer');
var uploadPath = path.join(__dirname, '../public/uploads');
var upload = multer({
    dest: uploadPath
});


//go out of this folder and into model/pets
var Pet = require('../models/pet');

//adds a new 
router.get('/add', function (req, res) {
    res.render('new-pet');
});

router.post('/add', function (req, res) {
    console.log(req.file);
    var pet = new Pet({
        name: req.body.name,
        animal: req.body.animal,
        price: req.body.price,
        imageFilename: req.file.filename
    });

    //Submit a response to the database
    pet.save(function (err, data) {
        if (err) {
            console.log('err');
            //Will redirect to the /pets URL
            return res.redirect(303, '/pets');
        }
        //Will rederict to the /pets URL
        //Use status code 303
        res.redirect(303, '/pets');
    });
});

router.get('/', function (req, res) {

    var query = {};
    if (req.query.animal) {
        query = {
            animal: req.query.animal
        };
    }
    //Finds all the pets
    //Use findOne to find on a search query
    Pet.find(query, function (err, data) {
        var pageData = {
            pets: data
        };
        res.render('pets', pageData);
    });
});

router.get('/:petSlug', function (req, res) {
    Pet.findOne({
        slug: req.params.petSlug
    }, function (err, data) {
        var pageData = {
            pets: [data]
        };
    });
});

module.exports = router;