const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/rock', function(req, res) {
    res.render('article/rock');
});

// Export
module.exports = router;