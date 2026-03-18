const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const protect = require("./middleware/authMiddleware");
const productRoutes = require("./routes/productRoutes");
const contactRoutes = require("./routes/contactRoutes");




const app = express();   // app is created here

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Maritime Service Portal API is running...");
});

// Protected route
app.get("/api/test", protect, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});