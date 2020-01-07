const mysql = require('mysql');
const { connection } = require('../../config/database');

module.exports = {
    getPiante(callback) {
        const db = mysql.createConnection(connection);

        db.connect((err) => {
            if (err) {
                callback(err);
                db.end();
                return;
            }

            let query = "SELECT * FROM `piante` ORDER BY id ASC"; // query database to get all

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
    getPianteById(id, callback) {
        const db = mysql.createConnection(connection);

        db.connect((err) => {
            if (err) {
                callback(err);
                db.end();
                return;
            }

            let query = "SELECT * FROM piante WHERE id = " + id + ""; // query database to get all

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