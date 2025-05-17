// CREATE - POST - /cart
app.post("/cart", async (req, res) => {
  const createdCart = await Cart.create(req.body);
  res.json(createdCart);
});

// READ - GET - /cart
app.get("/cart", async (req, res) => {
  // test
  const foundCart = await Cart.find();
  res.json(foundCart);
});

//DELETE /cart
app.delete("/cart/:cartId", async (req, res) => {
  //test
  const deletedCart = await Cart.findByIdAndDelete(req.params.petId);
  res.json(deletedCart);
});

// UPDATE - PUT - /cart/:cartId
app.put("/:cartId", async (req, res) => {
  const updatedCart = await Cart.findByIdAndUpdate(
    req.params.CartId,
    req.body,
    {
      new: true,
    }
  );
});
