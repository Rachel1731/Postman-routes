const Cart = require("./models/cart.js");

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here

//CREATE
const cartSchema = mongoose.Schema({
  name: "vegetable",
  price: "3.50",
  item: "lettuce",
});

cart.items.push({
  productId,
  quantity,
  price: product.price,
  total,
});

//GET
app.get("/cart", async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//DELETE
const deletedCart = await Cart.findByIdAndDelete(req.params.CartId);

if (!deletedCart) {
  return res.status(404).json({ message: "Cart not found" });
}

res.status(200).json({
  message: "Cart deleted successfully",
  Cart: deletedCart,
});

mongoose
  .connect("mongodb://localhost/shoppingcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

//UPDATE
const updatedCart = await Cart.findByIdAndUpdate(req.params.CartId, req.body, {
  new: true,
  runValidators: true,
});

if (!updatedCart) {
  return res.status(404).json({ message: "Cart not found" });
}

res.status(200).json({
  message: "Cart updated successfully",
  Cart: updatedCart,
});

app.listen(3000, () => {
  console.log("The express app is ready!");
});
