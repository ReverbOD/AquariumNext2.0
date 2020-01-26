const FishesID = require('../models/db_pesci')

module.exports = {
    getPesciById: (req, res) => {
        FishesID.getPesciById(req.query.id, (err, pesci) => {
            if (err)
                res.render('/');
            else {
                res.render('fish/fish_card.ejs', {
                    pesci
                });
            }
        })
    },
};