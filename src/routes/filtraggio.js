const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/filtraggio', function(req, res) {
    res.render('calc/filtraggio');
});

// Export
module.exports = router;