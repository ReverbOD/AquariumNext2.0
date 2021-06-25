/**
 * Created by reverb6821 on 29/05/2021.
 * @description Knex singleton connection. We initialize a knex connection here and export it so that it can be used across the project
 * and only a single connection is created for a single node instance
 */

const Utils = require('../src/services/utils');

const knexClientObject = {
   client: 'mysql2',
   connection: {
     host: Utils.config().knex.host,
     user: Utils.config().knex.user,
     password: Utils.config().knex.password,
     database: Utils.config().knex.db
   },
   pool: { min: Utils.config().knex.pool.min, max: Utils.config().knex.pool.max },
   acquireConnectionTimeout: Utils.config().knex.timeout,
   debug: Utils.config().knex.debug
 };
 
 module.exports = {
   knexConnection: require('knex')(knexClientObject)
 };