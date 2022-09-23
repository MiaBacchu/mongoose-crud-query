const mongoose = require('mongoose');

// Tours Schema
const toursSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    viewCount: Number
});
// Tours Model
module.exports.toursModel = mongoose.model('tour',toursSchema);