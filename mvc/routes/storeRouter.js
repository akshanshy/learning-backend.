// Core Modules
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const  homesControllers = require("../controllers/storeController")

storeRouter.get("/", homesControllers.getallhomes);
storeRouter.get("/bookings", homesControllers.getBookings);

module.exports = storeRouter;