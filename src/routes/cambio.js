const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/cambio', function(req, res) {
    res.render('calc/cambio');
});

// Export
module.exports = router;