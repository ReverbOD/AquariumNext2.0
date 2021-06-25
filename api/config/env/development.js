/**
 * Created by reverb6821 on 29/05/2021.
 * @description set development db environment
 */

module.exports = {
    knex: {
      host: 'localhost',
      user: 'root',
      password: '',
      db: 'aquariumnext_api',
      pool: {
        // min and max connections for pooling (For each instance of this server,
        // at least min no. of mysql connections will be opened which can go upto max no. of connections depending on load
        min: 2,
        max: 50
      },
      timeout: 10000, //connection timeout in ms,
      debug: ['ComQueryPacket']
    }
};