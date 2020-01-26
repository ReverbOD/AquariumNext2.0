const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/litraggio', function(req, res) {
    res.render('calc/litraggio');
});

// Export
module.exports = router;