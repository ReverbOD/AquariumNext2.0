const sql = require('./db.models');

const Fishes = {
  findById: (fishesId, result) => {
    sql.query(
      `SELECT * from fishes JOIN fishes_family ON fishes_family.id_family = fishes.fish_family JOIN fishes_biotope ON fishes_biotope.biotope_id = fishes.origin_biotope JOIN fishes_alimentation ON fishes_alimentation.alimentation_id = fishes.fish_alimentation JOIN fishes_nature ON fishes_nature.nature_id = fishes.fish_nature WHERE id=${fishesId}`,
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
          return;
        } else if (res.length) {
          console.log('pesce trovato ', res[0]);
          result(null, res[0]);
          return;
        } else {
          result({ kind: 'not_found' }, null);
        }
      }
    );
  },

  getAll: result => {
    sql.query(
      'SELECT * FROM fishes JOIN fishes_family ON fishes_family.id_family = fishes.fish_family JOIN fishes_biotope ON fishes_biotope.biotope_id = fishes.origin_biotope JOIN fishes_alimentation ON fishes_alimentation.alimentation_id = fishes.fish_alimentation JOIN fishes_nature ON fishes_nature.nature_id = fishes.fish_nature',
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(null, err);
          return;
        } else {
          console.log('pesci: ', res);
          result(null, res);
        }
      }
    );
  },
};

module.exports = Fishes;