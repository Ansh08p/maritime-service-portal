const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// CREATE MESSAGE
router.post("/", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    const newMessage = new Contact({ name, email, message });

    await newMessage.save();

    res.json({ message: "Message saved" });

  } catch {
    res.status(500).json({ error: "Error saving message" });
  }

});

// GET ALL (ADMIN)
router.get("/", async (req, res) => {

  const messages = await Contact.find().sort({ createdAt: -1 });

  res.json(messages);

});

module.exports = router;