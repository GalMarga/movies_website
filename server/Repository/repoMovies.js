// repoMovies.js
const Movies = require("../models/moviesModel");

// Get All
const getAllMovies = () => {
  return Movies.find();
};

//byID
const getMovieById = (id) => {
  return Movies.findById(id);
};

//post
const addMovie = (obj) => {
  const movieData = new Movies(obj);
  return movieData.save();
};
//put
const updateMovie = (id, obj) => {
  return Movies.findByIdAndUpdate(id, obj);
};

//delete
const deleteMovie = (id) => {
  return Movies.findByIdAndDelete(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
