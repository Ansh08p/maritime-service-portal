const express = require("express");
const {
  createOrder,
  getOrders,
  updateOrderStatus
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);

// admin route
router.put("/:id/status", protect, adminOnly, updateOrderStatus);

module.exports = router;