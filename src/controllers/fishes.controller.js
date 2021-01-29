const Fishes = require('../models/fishes.models');

exports.findId = (req, res) => {
  Fishes.findById(req.query.id, (err, fish) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `FISH WITH THE ID ${req.query.id} NOT FOUND`,
        });
      } else {
        res.status(500).send({
          message: `ERROR RETRIEVING THE FISH WITH THE ID - ${req.query.id}`,
        });
      }
    } else {   
      res.render('fish-views/fish-card', {fish}) 
    }
  });
};

exports.findAll = (req, res) => {
  Fishes.getAll((err, fishes) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Error retrieving the list.',
      });
    } else {
      res.render('fish-views/fishes-list.ejs', { fishes })
    }
  });
};