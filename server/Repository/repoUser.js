//repoUser.js
const Users = require('../models/usersModel');

// Get All
const getAllUsers = () => {
  return Users.find();
};

//byID
const getUserById = (id) => {
  return Users.findById(id);
};

//post
const addUser = (obj) => {
  const addUser = new Users(obj);
  return addUser.save();
};


module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
