const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/termostato', function(req, res) {
    res.render('calc/termostato');
});

// Export
module.exports = router;