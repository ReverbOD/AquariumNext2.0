const express = require('express');
const router = express.Router();
//const passport = require('passport');

// africa route
router.get('/africa', function(req, res) {
    res.render('biotope/africa');
});

// Export
module.exports = router;