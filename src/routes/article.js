const express = require('express');
const router = express.Router();
//const passport = require('passport');

// africa route
router.get('/africa', function(req, res) {
    res.render('biotope/africa');
});

// asia route
router.get('/asia', function(req, res) {
    res.render('biotope/asia');
});

// south america route
router.get('/southamerica', function(req, res) {
    res.render('biotope/southamerica');
});

// history route
router.get('/history', function(req, res) {
    res.render('article/history');
});

// azoto route
router.get('/azoto', function(req, res) {
    res.render('article/azoto');
});

// chemestry route
router.get('/chemestry', function(req, res) {
    res.render('article/chemestry');
});

// first start route
router.get('/choose', function(req, res) {
    res.render('article/choose');
});

// do not buy this fish route
router.get('/donotbuy', function(req, res) {
    res.render('article/donotbuy');
});

// float plant divider route
router.get('/float', function(req, res) {
    res.render('article/float');
});

// nature wood route
router.get('/naturewood', function(req, res) {
    res.render('article/naturewood');
});

// pmdd route
router.get('/pmdd', function(req, res) {
    res.render('article/pmdd');
});

// rock route
router.get('/rock', function(req, res) {
    res.render('article/rock');
});

// wood route
router.get('/wood', function(req, res) {
    res.render('article/wood');
});

// ground route
router.get('/ground', function(req, res) {
    res.render('article/ground');
});

// Export
module.exports = router;