import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAll, deleteItem, getById } from "../utils";
import MovieWatched from "./MovieWatched";

const MEMBER_URL = "http://localhost:3000/members";
const SUBSCRIPTIONS_URL = "http://localhost:3000/subscriptions";
const MOVIES_URL = "http://localhost:3000/movies";

const Member = ({ data }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    getAllSubscriptions();
  }, []);

  const navigate = useNavigate();

  const deleteMovie = async () => {
    const deleteBtn = await deleteItem(MEMBER_URL, data._id);
    console.log(deleteBtn);
    window.location.reload(false);
    navigate(`/allmembers`);
  };

  const getAllSubscriptions = async () => {
    const { data: dataSubsc } = await getAll(SUBSCRIPTIONS_URL);
    setSubscriptions(dataSubsc);
    fetchMovieDetails(dataSubsc);
  };

  const fetchMovieDetails = async (subscriptions) => {
    const movieDetails = {};
    for (const sub of subscriptions) {
      if (!movieDetails[sub.movieid]) {
        const { data: movieData } = await getById(MOVIES_URL, sub.movieid);
        movieDetails[sub.movieid] = movieData;
      }
    }
    setMovies(movieDetails);
  };

  const subMovie = subscriptions.filter(
    (subFilter) => subFilter.memberid._id === data._id
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div
      style={{ border: "2px solid Blue", margin: "10px" }}
      onClick={(e) => {
        localStorage.setItem("idMember", data._id);
      }}
    >
      <h3>{data.nameMember}</h3>
      <br />
      Email: {data.email} <br />
      City: {data.city} <br />
      <button onClick={() => navigate(`/editmember/${data._id}`)}>Edit</button>
      <button onClick={deleteMovie}>Delete</button>
      <br />
      <br />
      <MovieWatched />
      <br />
      {Array.isArray(subMovie) && subMovie.length > 0 ? (
        subMovie.map((subData, index) => (
          <div key={index}>
            <p>Date: {formatDate(subData.date)}</p>
            <p>
              Movie Name:{" "}
              {movies[subData.movieid] ? (
                <Link to={`/movies/allmovies`}>
                  {movies[subData.movieid].name}
                </Link>
              ) : (
                "Loading..."
              )}
            </p>
          </div>
        ))
      ) : (
        <p>No subscriptions found.</p>
      )}
    </div>
  );
};

export default Member;
