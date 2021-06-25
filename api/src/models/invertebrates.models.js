/**
 * Created by reverb6821 on 30/5/2021.
 */

const knex = require('../../lib/knex').knexConnection;

const findAll = () => {
    try {
        return knex('invertebrates')
            .join('invertebrates_species', 'invertebrates_species.species_id', 'invertebrates.invertebrates_species')
            .join('invertebrates_biotope', 'invertebrates_biotope.biotope_id', 'invertebrates.invertebrates_biotope')
    } catch (err) {
        log.info(err.message);
    }
};

const findById = (id) => {
    try {
        return knex('invertebrates')
        .join('invertebrates_species', 'invertebrates_species.species_id', 'invertebrates.invertebrates_species')
        .join('invertebrates_biotope', 'invertebrates_biotope.biotope_id', 'invertebrates.invertebrates_biotope')
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
