// ServicesSubscriptions.js
const RepoSubscriptions = require("../Repository/repoSubscriptions");
const Movie = require('../models/moviesModel');
const Member = require('../models/membersModel');
const SubscriptionModel = require('../models/subscriptionsModel');
const RepoMembers = require('../Repository/repoMembers');

// Get All
const getAllSubscriptions = async () => {
  return await RepoSubscriptions.getAllSubscriptions();
};

// Get by ID
const getSubscriptionById = async (id) => {
  return await RepoSubscriptions.getSubscriptionById(id);
};

// Add User
const addSubscription = async (obj) => {
  return await RepoSubscriptions.addSubscription(obj);
};

// Update User
const updateSubscription = async (id, obj) => {
  return await RepoSubscriptions.updateSubscription(id, obj);
};

// Delete User
const deleteSubscription = async (id) => {
  return await RepoSubscriptions.deleteSubscription(id);
};

// Populate MemberID

const PopulateMemberID = async (memberId, memberData) => {
  if (!memberId) {
    throw new Error('The memberID field is required');
  }

  memberData.memberid = memberId;
  memberData.date = new Date();

  const newMember = new SubscriptionModel(memberData);
  const savedMember = await newMember.save();

  const memberById = await RepoMembers.getMemberById(memberId);
  memberById.watchMovies.push({
    movieid: savedMember.movieid
  });
    await memberById.save();

  return savedMember;
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
  PopulateMemberID
};