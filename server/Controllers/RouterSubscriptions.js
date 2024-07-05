const express = require("express");
const router = express.Router();
const Subscription = require("../models/subscriptionsModel");

router.get("/", async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate("memberid");
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/:memberId", async (req, res) => {
  const { memberId } = req.params;
  const { movieid, date } = req.body;

  try {
    const newSubscription = new Subscription({
      memberid: memberId,
      movieid,
      date,
    });

    const savedSubscription = await newSubscription.save();
    res.status(201).json(savedSubscription);
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
