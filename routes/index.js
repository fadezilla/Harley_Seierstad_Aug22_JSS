var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  if(!req.user) {
    res.render('index', {req, user: null});
  }
  else {
    res.render('index', {req, user: req.user});
  }
});

module.exports = router;
