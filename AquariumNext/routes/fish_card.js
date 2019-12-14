module.exports = {
    getPesciById: (req, res) => {
        let query = "SELECT * FROM pesci WHERE id = " + req.query.id + ""; // query database to get all

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('fish_card.ejs', {
                pesci: result
            });
        });
    },
};