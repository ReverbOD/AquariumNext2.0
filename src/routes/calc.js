const express = require('express');
const router = express.Router();
//const passport = require('passport');

// litraggio route
router.get('/litraggio', function(req, res) {
    res.render('calc/litraggio');
});

// cambio route
router.get('/cambio', function(req, res) {
    res.render('calc/cambio');
});

// filtraggio bio route
router.get('/filtraggio', function(req, res) {
    res.render('calc/filtraggio');
});

// lumen route
router.get('/lumen', function(req, res) {
    res.render('calc/lumen');
});

// pompa route
router.get('/pompa', function(req, res) {
    res.render('calc/pompa');
});

// termos route
router.get('/termostato', function(req, res) {
    res.render('calc/termostato');
});

// fondo route
router.get('/fondo', function(req, res) {
    res.render('calc/fondo');
});

// Export
module.exports = router;