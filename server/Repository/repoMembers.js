// repoMembers.js

const Members = require("../models/membersModel");

// Get All
const getAllMembers = () => {
  return Members.find();
};

//byID
const getMemberById = (id) => {
  return Members.findById(id);
};

//post
const addMember = (obj) => {
  const membersData = new Members(obj);
  return membersData.save();
};
//put
const updateMember = (id, obj) => {
  return Members.findByIdAndUpdate(id, obj);
};

//delete
const deleteMembers = (id) => {
  return Members.findByIdAndDelete(id);
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMembers,
};
