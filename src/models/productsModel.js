const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true,
        min: 0
      },
      stock: {
        type: Number,
        required: true,
        min: 0
      },
    },
{
    timestamp: true
}
);


const Product = mongoose.model('Product', productSchema);

module.exports = Product;