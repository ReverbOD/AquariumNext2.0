const express = require('express');
const router = express.Router();
//const passport = require('passport');

// root route
router.get('/', function(req, res) {
    res.render('home');
});

// home route
router.get('/', function(req, res) {
    res.render('home');
});



// Export
module.exports = router;