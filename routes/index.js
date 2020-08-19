var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chat', function(req, res, next) {
  res.render('form-chat', { title: 'Chat' });
});

module.exports = router;
