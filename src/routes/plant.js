const Plants = require('../models/db.piante.js');
const PlantsID = require('../models/db.piante.js')

const {
    writeError
} = require('../lib/writeLog');

module.exports = {
    getPiantePage: (req, res) => {

        Plants.getPiante((err, piante) => {
            if (err) {
                writeError(err);
                res.redirect('/');
            } else {
                res.render('plant/plant.ejs', {
                    piante
                });
            }
        })
    },
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
