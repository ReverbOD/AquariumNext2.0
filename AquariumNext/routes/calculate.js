const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/calculate', function(req, res) {
    res.render('calculate');
});

// Export
module.exports = router;