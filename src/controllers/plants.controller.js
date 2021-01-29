const Plants = require('../models/plants.models');

exports.findId = (req, res) => {
  Plants.findById(req.query.id, (err, plant) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Pianta con l'id ${req.query.id} non trovato.`,
        });
      } else {
        res.status(500).send({
          message: `Errore nel prendere la Pianta con l'id ${req.query.id}`,
        });
      }
    } else {
      res.render('plant-views/plant-card', {plant})
    }
  });
};

exports.findAll = (req, res) => {
  Plants.getAll((err, plants) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Errore mentre prendevo la lista.',
      });
    } else {
        res.render('plant-views/plants-list.ejs', { plants })
    }
  });
};