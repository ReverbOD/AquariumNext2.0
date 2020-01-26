const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/naturewood', function(req, res) {
    res.render('article/naturewood');
});

// Export
module.exports = router;