const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/pmdd', function(req, res) {
    res.render('article/pmdd');
});

// Export
module.exports = router;