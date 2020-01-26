const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/background', function(req, res) {
    res.render('article/background');
});

// Export
module.exports = router;