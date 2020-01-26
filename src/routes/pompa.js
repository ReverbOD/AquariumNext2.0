const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/pompa', function(req, res) {
    res.render('calc/pompa');
});

// Export
module.exports = router;