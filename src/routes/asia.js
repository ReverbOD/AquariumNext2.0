const express = require('express');
const router = express.Router();
//const passport = require('passport');

// asia route
router.get('/asia', function(req, res) {
    res.render('biotope/asia');
});

// Export
module.exports = router;