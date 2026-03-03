
const registeredHomes = [];
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
};

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  const { houseName, price, location, rating, photoUrl } = req.body;  
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render('homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
}

exports.getallhomes = (req, res, next) => {

  Home.fetchAll((homes) => {
    res.render('home', { 
      registeredHomes: homes,
      pageTitle: 'airbnb Home',
      currentPage: 'Home'
    });
  });

};
exports.registeredHomes = registeredHomes;