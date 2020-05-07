
const Trip = require('../models/Trip');

const getAllTrips = (req, res, next) => {
  Trip.getAll(async (err, results, fields) => {
    let allTrips = []
    await results.map((result) => {
      allTrips.push(result.name);
    });
    res.render("home", { allTrips });
  });
};

module.exports = { getAllTrips };
