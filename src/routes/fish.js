const Fishes = require('../models/db.pesci');
const {
    writeError
} = require('../lib/writeLog');

module.exports = {
    getPesciPage: (req, res) => {

        Fishes.getPesci((err, pesci) => {
            if (err) {
                writeError(err);
                res.redirect('/');
            } else {
                res.render('fish/fish.ejs', {
                    pesci
                });
            }
        })
    },
};