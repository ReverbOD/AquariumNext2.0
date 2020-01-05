const mysql = require('mysql');
const params = require('../../config/database');


module.exports = {
    getPesci(callback) {
        const db = mysql.createConnection(params);

        db.connect((err) => {
            if (err) {
                callback(err);
                db.end();
                return;
            }

            let query = "SELECT * FROM `pesci` ORDER BY id ASC"; // query database to get all

            // execute query
            db.query(query, (err, result) => {
                if (err)
                    callback(err);
                else
                    callback(null, result);

                db.end();
            });

        });
    },
    getPesciById(id, callback) {
        const db = mysql.createConnection(params);

        db.connect((err) => {
            if (err) {
                callback(err);
                db.end();
                return;
            }

            let query = "SELECT * FROM pesci WHERE id = " + id + ""; // query database to get all

            db.query(query, (err, result) => {
                if (err)
                    callback(err);
                else
                    callback(null, result);

                db.end();
            });

        });
    }
};