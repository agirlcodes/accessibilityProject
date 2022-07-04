const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    proName: String,
    proDescription: String,
    proPrice: Number,
    proCategory: String
})

const Products = mongoose.model('products', productSchema)

module.exports = Products;