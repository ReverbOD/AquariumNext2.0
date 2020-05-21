const FishesID = require('../models/db.pesci.js')

module.exports = {
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