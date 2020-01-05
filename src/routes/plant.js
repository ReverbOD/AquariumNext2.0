const Plants = require('../models/db_piante')

module.exports = {
    getPiantePage: (req, res) => {

        Plants.getPiante((err, piante) => {
            if (err)
                res.render('/');
            else {
                res.render('plant.ejs', {
                    piante
                });
            }
        })
    },
};