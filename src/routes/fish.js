const Fishes = require('../models/db_pesci')

module.exports = {
    getPesciPage: (req, res) => {
        Fishes.getPesci((err, pesci) => {
            let query = "SELECT * FROM pesci WHERE id = " + req.query.id + ""; // query database to get all
            if (err)
                res.render('/');
            else {
                res.render('fish.ejs', {
                    pesci
                });
            }
        })
    },
};