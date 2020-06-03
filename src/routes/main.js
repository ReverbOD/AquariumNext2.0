const express = require('express');
const router = express.Router();


// root route
router.get('/', function(req, res) {
    res.render('home');
});

// Article

// Biotope

// Africa
router.get('/africa', function(req, res) {
    res.render('biotope/africa');
});

// America del Sud
router.get('/southamerica', function(req, res) {
    res.render('biotope/southamerica');
});

// Sud Est Asiatico
router.get('/asia', function(req, res) {
    res.render('biotope/asia');
});

// End Biotope

// Storia
router.get('/history', function(req, res) {
    res.render('article/history');
});

// Ciclo Azoto
router.get('/azoto', function(req, res) {
    res.render('article/azoto');
});

// Chimica
router.get('/chemestry', function(req, res) {
    res.render('article/chemestry');
});

// Primo Avvio
router.get('/start', function(req, res) {
    res.render('article/start');
});

// Non Comprare
router.get('/donotbuy', function(req, res) {
    res.render('article/donotbuy');
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

// Calculator

// litraggio route
router.get('/litraggio', function(req, res) {
    res.render('calculator/litraggio');
});

// pompa route
router.get('/pompa', function(req, res) {
    res.render('calculator/pompa');
});

// termos route
router.get('/termostato', function(req, res) {
    res.render('calculator/termostato');
});

// filtraggio bio route
router.get('/filtraggio', function(req, res) {
    res.render('calculator/filtraggio');
});

// lumen route
router.get('/lumen', function(req, res) {
    res.render('calculator/lumen');
});

// fondo route
router.get('/fondo', function(req, res) {
    res.render('calculator/fondo');
});

// cambio route
router.get('/cambio', function(req, res) {
    res.render('calculator/cambio');
});

// Export
module.exports = router;