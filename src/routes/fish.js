const Fishes = require('../models/db.pesci');
const FishesID = require('../models/db.pesci.js')

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
    getPesciById: (req, res) => {
        FishesID.getPesciById(req.query.id, (err, pesci) => {
            if (err)
                res.render('/');
            else {
                res.render('fish/fish.card.ejs', {
                    pesci
                });
            }
        })
    },
};