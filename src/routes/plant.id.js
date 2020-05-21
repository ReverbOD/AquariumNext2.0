const PlantsID = require('../models/db.piante.js')

module.exports = {
    getPianteById: (req, res) => {
        PlantsID.getPianteById(req.query.id, (err, piante) => {
            if (err)
                res.render('/');
            else {
                res.render('plant/plant.card.ejs', {
                    piante
                });
            }
        })
    },
};