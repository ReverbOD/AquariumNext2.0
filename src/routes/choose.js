const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/choose', function(req, res) {
    res.render('article/choose');
});

// Export
module.exports = router;