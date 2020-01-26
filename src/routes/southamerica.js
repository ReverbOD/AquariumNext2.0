const express = require('express');
const router = express.Router();
//const passport = require('passport');

// south america route
router.get('/southamerica', function(req, res) {
    res.render('biotope/southamerica');
});

// Export
module.exports = router;