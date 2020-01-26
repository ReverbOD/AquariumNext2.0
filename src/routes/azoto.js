const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/azoto', function(req, res) {
    res.render('article/azoto');
});

// Export
module.exports = router;