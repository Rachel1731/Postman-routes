const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  name: String,
  price: Number,
  item: String,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
