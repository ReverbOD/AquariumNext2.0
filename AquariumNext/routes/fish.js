module.exports = {
    getPesciPage: (req, res) => {
        let query = "SELECT * FROM `pesci` ORDER BY id ASC"; // query database to get all

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('fish.ejs', {
                pesci: result
            });
        });
    },
};