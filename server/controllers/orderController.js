const Order = require("../models/Order");

// create order
exports.createOrder = async (req, res) => {

  try {

    const order = await Order.create({
      ...req.body,
      user: req.user.id
    });

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


// get all orders
exports.getOrders = async (req, res) => {

  try {

    const orders = await Order.find()
      .populate("user", "name email")
      .populate("items.product");

    res.json(orders);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

// update order status (admin)
exports.updateOrderStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;

    await order.save();

    res.json(order);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};