// RouterMovies.js

const express = require("express");
const MoviesServices = require("../Services/servicesMovies");

const router = express.Router();



router.get("/", async (req, res) => {
  try {
    const movies = await MoviesServices.getAllMovies();
    res.send(movies);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await MoviesServices.getMovieById(req.params.id);
    res.send(movie);
  } catch (error) {
    res.send;
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const movie = await MoviesServices.addMovie(req.body);
    res.send(movie);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const movie = await MoviesServices.updateMovie(req.params.id, req.body);
    res.send(movie);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const movie = await MoviesServices.deleteMovie(req.params.id);
    res.send(movie);
  } catch (error) {
    res.send;
    console.log(error);
  }
});


module.exports = router;
