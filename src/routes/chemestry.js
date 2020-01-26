const express = require('express');
const router = express.Router();
//const passport = require('passport');

// calc route
router.get('/chemestry', function(req, res) {
    res.render('article/chemestry');
});

// Export
module.exports = router;