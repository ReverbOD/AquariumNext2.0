const sql = require('./db.models');

const Plants = {
  findById: (plantsId, result) => {
    sql.query(
      `SELECT * from plants JOIN plants_family ON plants_family.family_id = plants.plant_family JOIN plants_light ON plants_light.light_id = plants.plant_light JOIN plants_origin ON plants_origin.origin_id = plants.plant_origin JOIN plants_position ON plants_position.position_id = plants.plant_position JOIN plants_reproduction ON plants_reproduction.reproduction_id = plants.plant_reproduction JOIN plants_severity ON plants_severity.severity_id = plants.plant_severity WHERE id=${plantsId}`,
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
          return;
        } else if (res.length) {
          console.log('pianta trovato ', res[0]);
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
      'SELECT * FROM plants JOIN plants_family ON plants_family.family_id = plants.plant_family JOIN plants_light ON plants_light.light_id = plants.plant_light JOIN plants_origin ON plants_origin.origin_id = plants.plant_origin JOIN plants_position ON plants_position.position_id = plants.plant_position JOIN plants_reproduction ON plants_reproduction.reproduction_id = plants.plant_reproduction JOIN plants_severity ON plants_severity.severity_id = plants.plant_severity',
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(null, err);
          return;
        } else {
          console.log('piante: ', res);
          result(null, res);
        }
      }
    );
  },
};

module.exports = Plants;