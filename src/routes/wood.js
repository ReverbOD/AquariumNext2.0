const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/wood', function(req, res) {
    res.render('article/wood');
});

// Export
module.exports = router;