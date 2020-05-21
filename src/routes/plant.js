const Plants = require('../models/db.piante.js');


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
};