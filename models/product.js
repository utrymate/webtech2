const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true, min: 1, max: 9999999},
});

module.exports = mongoose.model('Product', ProductSchema);