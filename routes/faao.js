var express = require('express');
var router = express.Router();

/* GET faao listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'faao' });
});


module.exports = router;
