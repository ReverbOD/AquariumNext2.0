const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/co2', function(req, res) {
    res.render('article/co2');
});

// Export
module.exports = router;