import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getById } from "../utils";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


import { updateItem } from "../utils";

const MOVIES_URL = "http://localhost:3000/movies";

const EditMovie = () => {
  const navigate = useNavigate();
  
  const { id, name } = useParams();

  const [nameMovie, setNameMovie] = useState("");
  const [genres, setGenres] = useState("");
  const [image, setImage] = useState("");
  const [premiered, setPremiered] = useState("");

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const { data } = await getById(MOVIES_URL, id);
        setNameMovie(data.name);
        setGenres(data.genres);
        setImage(data.imageUrl);
        setPremiered(data.yearPremiered);

        console.log(data);
      } catch {
        console.error("Error");
      }
    };

    getMovieById();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      const objUpdate = {
        name: nameMovie,
        genres: genres,
        imageUrl: image,
        yearPremiered: premiered,
      };
      const { data } = await updateItem(MOVIES_URL, id, objUpdate);
      console.log(data);

      navigate('/movies/allmovies')
  };

  return (
    <div>
      <h3>Edit Movie</h3> <br />
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={nameMovie}
          onChange={(e) => setNameMovie(e.target.value)}
        />{" "}
        <br />
        Genres:{" "}
        <input
          type="text"
          name="genres"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />{" "}
        <br />
        Image URL:{" "}
        <input
          type="text"
          name="imageUrl"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />{" "}
        <br />
        Year Premiered:{" "}
        <input
          type="text"
          name="yearPremiered"
          value={premiered}
          onChange={(e) => setPremiered(e.target.value)}
        />{" "}
        <br />
      
      <button type="submit"> Save </button>
      <button type="button" onClick={() => window.history.back()}>Cancel</button>
      </form>
    </div>
  );
};

export default EditMovie;
