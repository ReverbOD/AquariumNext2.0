module.exports = app => {

  //! Home Routes
  app.get('/', function(req, res){
    res.render('index')
  });

  //! DB Routes
  const fishes = require('../controllers/fishes.controller');
  const plants = require('../controllers/plants.controller');

  app.get('/scheda-pesce', fishes.findId);

  app.get('/pesci-acquario', fishes.findAll, function(req, res){
    res.render('/fish-views/fishes-list');
  });

  app.get('/scheda-pianta', plants.findId);

  app.get('/piante-acquario', plants.findAll, function(req, res){
    res.render('/plant-views/plants-list');
  });


  //! 404
  app.use(function(req, res, next){
    res.status(404).render('404');
  }); 
  

};