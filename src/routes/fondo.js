const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/fondo', function(req, res) {
    res.render('calc/fondo');
});

// Export
module.exports = router;