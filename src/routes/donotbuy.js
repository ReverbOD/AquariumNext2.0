const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/donotbuy', function(req, res) {
    res.render('article/donotbuy');
});

// Export
module.exports = router;