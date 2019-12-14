module.exports = {
    getPianteById: (req, res) => {
        let query = "SELECT * FROM piante WHERE id = " + req.query.id + ""; // query database to get all

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('plant_card.ejs', {
                piante: result
            });
        });
    },
};