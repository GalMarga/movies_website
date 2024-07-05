// ServicesUsers.js
const RepoUsers = require("../Repository/repoUser");

// Get All
const getAllUsers = async () => {
  return await RepoUsers.getAllUsers();
};

// Get by ID
const getUserById = async (id) => {
  return await RepoUsers.getUserById(id);
};

// Add User
const addUser = async (obj) => {
  return await RepoUsers.addUser(obj);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
