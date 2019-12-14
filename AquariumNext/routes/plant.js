module.exports = {
    getPiantePage: (req, res) => {
        let query = "SELECT * FROM `piante` ORDER BY id ASC"; // query database to get all

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('plant.ejs', {
                piante: result
            });
        });
    },
};