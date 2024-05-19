const mongoose = require("mongoose");

// Create a Mongoose Schema

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be less than 0"],
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Quantity cannot be less than 0"],
  },
  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
