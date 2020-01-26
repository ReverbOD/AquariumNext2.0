const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/history', function(req, res) {
    res.render('article/history');
});

// Export
module.exports = router;