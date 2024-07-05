// ServicesMovies.js
const RepoMovies = require("../Repository/repoMovies");

// Get All
const getAllMovies = async () => {
  return await RepoMovies.getAllMovies();
};

// Get by ID
const getMovieById = async (id) => {
  return await RepoMovies.getMovieById(id);
};

// Add User
const addMovie = async (obj) => {
  return await RepoMovies.addMovie(obj);
};

// Update User
const updateMovie = async (id, obj) => {
  return await RepoMovies.updateMovie(id, obj);
};

// Delete User
const deleteMovie = async (id) => {
  return await RepoMovies.deleteMovie(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
