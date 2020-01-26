const express = require('express');
const router = express.Router();
//const passport = require('passport');

// europe route
router.get('/europe', function(req, res) {
    res.render('biotope/europe');
});

// Export
module.exports = router;