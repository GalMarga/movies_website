// ServicesMembers.js
const RepoMembers = require("../Repository/repoMembers");

// Get All
const getAllMembers = async () => {
  return await RepoMembers.getAllMembers();
};

// Get by ID
const getMemberById = async (id) => {
  return await RepoMembers.getMemberById(id);
};

// Add User
const addMember = async (obj) => {
  return await RepoMembers.addMember(obj);
};

// Update User
const updateMember = async (id, obj) => {
  return await RepoMembers.updateMember(id, obj);
};

// Delete User
const deleteMembers = async (id) => {
  return await RepoMembers.deleteMembers(id);
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMembers,
};


