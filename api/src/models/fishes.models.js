/**
 * Created by reverb6821 on 30/5/2021.
 */

const knex = require('../../lib/knex').knexConnection;

const findAll = () => {
  try {
    return knex('fishes')
      .join('fishes_alimentation', 'fishes_alimentation.alimentation_id', 'fishes.fish_alimentation')
      .join('fishes_biotope', 'fishes_biotope.biotope_id', 'fishes.origin_biotope')
      .join('fishes_family', 'fishes_family.id_family', 'fishes.fish_family')
      .join('fishes_nature', 'fishes_nature.nature_id', 'fishes.fish_nature')
  } catch (err) {
    log.info(err.message);
  }
};

const findById = (id) => {
  try {
    return knex('fishes')
      .join('fishes_alimentation', 'fishes_alimentation.alimentation_id', 'fishes.fish_alimentation')
      .join('fishes_biotope', 'fishes_biotope.biotope_id', 'fishes.origin_biotope')
      .join('fishes_family', 'fishes_family.id_family', 'fishes.fish_family')
      .join('fishes_nature', 'fishes_nature.nature_id', 'fishes.fish_nature')
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
