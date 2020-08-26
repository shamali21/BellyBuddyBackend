const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menusSchema = new Schema({
name: {type: String, required: true},
description: {type: String, required: true},
address1: {type: String, required: true},
city: {type: String, required: true},
duration: {type: Number, required: true},
date: {type: Date, required: true},
}, {
 timestamps: true,
});
const Restaurants = mongoose.model('Restaurants', menusSchema);

module.exports = Restaurants;


