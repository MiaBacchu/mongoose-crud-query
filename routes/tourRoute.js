const express = require('express');
const { tourPatch, getTrendingTour, getCheapestTour } = require('../controller/tourController');

const tourRoute = express.Router();

// Tour update
tourRoute.
patch('/:id',tourPatch);

module.exports = tourRoute;

// get top 3 trending tours
tourRoute.
get('/trending',getTrendingTour);

// get top 3 trending tours
tourRoute.
get('/cheapest',getCheapestTour);