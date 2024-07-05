import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { addItem } from "../utils";

const MOVIES_URL = "http://localhost:3000/movies";

const EditMovie = () => {

  const { id, name } = useParams();

  const [nameMovie, setNameMovie] = useState("");
  const [genres, setGenres] = useState("");
  const [image, setImage] = useState("");
  const [premiered, setPremiered] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  
      const addMovie = {
        name: nameMovie,
        genres: genres,
        imageUrl: image,
        yearPremiered: premiered,
      };
      const { data } = await addItem(MOVIES_URL, addMovie);
      console.log(data);

  };

  return (
    <div>
      <h3>Add Movie</h3> <br />
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
      
      <button type="submit"> Add </button>
      <button type="button" onClick={() => window.history.back()}>Cancel</button>
      </form>
    </div>
  );
};

export default EditMovie;
