const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/float', function(req, res) {
    res.render('article/float');
});

// Export
module.exports = router;