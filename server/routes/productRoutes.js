const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const protect = require("../middleware/authMiddleware");

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD PRODUCT (ADMIN)
router.post("/", protect, async (req, res) => {

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Not authorized" });
  }

  const { name, category, price } = req.body;

  const product = new Product({ name, category, price });

  await product.save();

  res.json(product);
});

// UPDATE PRODUCT
router.put("/:id", protect, async (req, res) => {

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Not authorized" });
  }

  const { name, category, price } = req.body;

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name, category, price },
    { new: true }
  );

  res.json(product);
});

// DELETE PRODUCT
router.delete("/:id", protect, async (req, res) => {

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Not authorized" });
  }

  await Product.findByIdAndDelete(req.params.id);

  res.json({ message: "Product deleted" });
});

module.exports = router;