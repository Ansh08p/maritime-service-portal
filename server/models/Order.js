const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  shipName: {
    type: String,
    required: true
  },

  port: {
    type: String,
    required: true
  },

  eta: {
    type: Date
  },

  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: Number
    }
  ],

  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "delivered"],
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);