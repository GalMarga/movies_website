// repoSubscriptions.js
const Subscriptions = require("../models/subscriptionsModel");

// Get All
const getAllSubscriptions = () => {
  return Subscriptions.find();
};

//byID
const getSubscriptionById = (id) => {
  return Subscriptions.findById(id);
};

//post
const addSubscription = (obj) => {
  const subscriptionData = new Users(obj);
  return subscriptionData.save();
};
//put
const updateSubscription = (id, obj) => {
  return Subscriptions.findByIdAndUpdate(id, obj);
};

//delete
const deleteSubscription = (id) => {
  return Subscriptions.findByIdAndDelete(id);
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
};
