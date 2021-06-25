/**
 * Created by reverb6821 on 30/5/2021.
 * @description: routes for the apis
 */

module.exports = app => {
    const fishes = require('../../src/controllers/fishes.controllers');
    const plants = require('../../src/controllers/plants.controller');
    const invertebrates = require('../../src/controllers/invertebrates.controller');

    app.get('/fishes/:fishId', fishes.findById);
    app.get('/fishes', fishes.findAll);
    app.get('/plants/:plantId', plants.findById);
    app.get('/plants', plants.findAll);
    app.get('/invertebrates/:invertebratesId', invertebrates.findById);
    app.get('/invertebrates', invertebrates.findAll);
  };