const express = require('express');
const { tourPost, getAllTours, getTourById, getTrendingTour } = require('../controller/toursController');
const { viewCount } = require('../middleware/viewCount');
const toursRoute = express.Router();

// Get Tour by Id
toursRoute.
get('/:id',viewCount,getTourById);

// Get All Tours
toursRoute.
get('/',getAllTours);


// Tours Post
toursRoute.
post('/',tourPost)

module.exports = toursRoute;
