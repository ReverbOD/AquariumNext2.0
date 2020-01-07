const Plants = require('../models/db_piante');
const {
    writeError
} = require('../lib/writeLog');


module.exports = {
    getPiantePage: (req, res) => {

        Plants.getPiante((err, piante) => {
            if (err){
                writeError(err);
                res.redirect('/');
            }
            else {
                res.render('plant.ejs', {
                    piante
                });
            }
        })
    },
};