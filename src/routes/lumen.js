const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/lumen', function(req, res) {
    res.render('calc/lumen');
});

// Export
module.exports = router;