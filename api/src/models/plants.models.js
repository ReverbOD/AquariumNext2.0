/**
 * Created by reverb6821 on 30/5/2021.
 */

const knex = require('../../lib/knex').knexConnection;

const findAll = () => {
    try {
        return knex('plants')
            .join('plants_family', 'plants_family.family_id', 'plants.plant_family')
            .join('plants_light', 'plants_light.light_id', 'plants.plant_light')
            .join('plants_origin', 'plants_origin.origin_id', 'plants.plant_origin')
            .join('plants_position', 'plants_position.position_id', 'plants.plant_position')
            .join('plants_reproduction', 'plants_reproduction.reproduction_id', 'plants.plant_reproduction')
            .join('plants_severity', 'plants_severity.severity_id', 'plants.plant_severity')
    } catch (err) {
        log.info(err.message);
    }
};

const findById = (id) => {
    try {
        return knex('plants')
            .join('plants_family', 'plants_family.family_id', 'plants.plant_family')
            .join('plants_light', 'plants_light.light_id', 'plants.plant_light')
            .join('plants_origin', 'plants_origin.origin_id', 'plants.plant_origin')
            .join('plants_position', 'plants_position.position_id', 'plants.plant_position')
            .join('plants_reproduction', 'plants_reproduction.reproduction_id', 'plants.plant_reproduction')
            .join('plants_severity', 'plants_severity.severity_id', 'plants.plant_severity')
            .where({ id })
            .first();
    } catch (err) {
        log.info(err.message);
    }
};

module.exports = {
    findAll,
    findById,
};
