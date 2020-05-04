
const Trip = require('../models/Trip');

const getAllTrips = (req, res, next) => {
  Trip.getAll((err, results, fields) => {
    req.trips = results;
    return results.map(result => {
      let allTrips = result.name;
      console.log('yo', allTrips);
      res.render('home', {allTrips});
    })
    next();
  })
}

module.exports = { getAllTrips };
