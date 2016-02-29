var express = require('express');
var router = express.Router();

/* GET til listing. */
router.get('/', function(req, res, next) {
  res.render('wtl/index', { title: 'Want to Learn' });
});

module.exports = router;
