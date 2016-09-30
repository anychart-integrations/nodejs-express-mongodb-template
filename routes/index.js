var express = require('express');
var router = express.Router();
var Fruit = require('../models/Fruit.js');

/* GET page. */
router.get('/', function(req, res, next) {
  Fruit.find({}).select('name value -_id').sort({'value': -1}).limit(5).exec(function (err, fruits) {
    if (err) return next(err);
    res.render('index', {title: 'Anychart NodeJS demo',
      chartTitle: "Top 5 fruits",
      chartData: JSON.stringify(fruits)
    });
  });
});

module.exports = router;
