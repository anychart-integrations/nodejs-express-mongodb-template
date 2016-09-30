var express = require('express');
var router = express.Router();
var Fruit = require('../models/Fruit.js');

/* GET page. */
router.get('/', function(req, res, next) {
  Fruit.find({}).select('name value -_id').sort({'value': -1}).limit(5).exec(function (err, fruits) {
    if (err) return next(err);
      // chart JSON data
      var json = {
          chart: {
              type: "pie",
              title: 'Top 5 Fruits',
              data: fruits,
              container: "container"
          }
      };
    res.render('index', {title: 'Anychart NodeJS demo', chartData: JSON.stringify(json)});
  });
});

module.exports = router;
