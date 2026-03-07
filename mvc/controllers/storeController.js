const registeredHomes = [];
const Home = require("../models/home");

exports.getallhomes = (req, res, next) => {

  Home.fetchAll((homes) => {
    res.render('store/home-list', { 
      registeredHomes: homes,
      pageTitle: 'airbnb Home',
      currentPage: 'Home'
    });
  });

};
exports.getBookings = (req, res, next) => {

  Home.fetchAll((registeredHomes) => {
    res.render('store/Bookings', { 
      pageTitle: 'My Bookings',
      currentPage: 'Bookings',
    });
  });

};
exports.registeredHomes = registeredHomes;