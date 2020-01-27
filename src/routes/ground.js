const express = require('express');
const router = express.Router();
//const passport = require('passport');

// africa route
router.get('/ground', function(req, res) {
    res.render('article/ground');
});

// Export
module.exports = router;