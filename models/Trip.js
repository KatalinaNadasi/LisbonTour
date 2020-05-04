const connection = require('../conf');

const Trip = {};

Trip.getAll = (callback) => {
  connection.query(
    'SELECT * FROM trip',
    (err, results, fields) => {
      callback(err, results, fields);
    }
  )
}

module.exports = Trip;
