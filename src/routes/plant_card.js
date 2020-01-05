const PlantsID = require('../models/db_piante')

module.exports = {
    getPianteById: (req, res) => {
        PlantsID.getPianteById(req.query.id, (err, piante) => {
            if (err)
                res.render('/');
            else {
                res.render('plant_card.ejs', {
                    piante
                });
            }
        })
    },
};