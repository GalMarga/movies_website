import React from "react";
import { getAll } from "../utils";
import { useEffect, useState } from "react";
import SubscriptionsWatched from "./SubscriptionsWatched";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import { deleteItem } from "../utils";

const MOVIES_URL = "http://localhost:3000/movies";

const Movie = ({ data }) => {
  const navigate = useNavigate();

  const { id, name } = useParams();

  const deleteMovie = async () => {
    const deleteBtn = await deleteItem(MOVIES_URL, data._id);
    console.log(deleteBtn);
    window.location.reload();
  };

  return (

    
    <div style={{ border: "2px solid Blue", margin: "10px" }}>
      {data.name} {", "} {data.yearPremiered} <br />
      {data.genres} <br />
      <img
        src={data.imageUrl}
        alt="Movie Poster"
        style={{ width: "200px", height: "auto" }}
      />
      <SubscriptionsWatched props = {data._id}/>
      <br />
      <button onClick={() => navigate(`/editmovie/${data._id}`)}> Edit </button>
      <button onClick={deleteMovie}> Delete </button>
    </div>


  );
};

export default Movie;
