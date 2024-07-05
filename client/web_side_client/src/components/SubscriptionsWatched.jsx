import React, { useState, useEffect } from "react";
import { getAll } from "../utils";
import { Link } from "react-router-dom";

const SubscriptionsWatched = ({ props }) => {
  const MEMBERS_URL = "http://localhost:3000/members";
  const MOVIES_URL = "http://localhost:3000/movies";

  const [members, setMembers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [watchedMembers, setWatchedMembers] = useState([]);

  useEffect(() => {
    const getAllMembers = async () => {
      try {
        const { data } = await getAll(MEMBERS_URL);
        setMembers(data);
        // console.log("Members fetched:", data);
      } catch (error) {
        // console.error("Error fetching members:", error);
      }
    };

    const getAllMovies = async () => {
      try {
        const { data } = await getAll(MOVIES_URL);
        setMovies(data);
        // console.log("Movies fetched:", data);
      } catch (error) {
        // console.error("Error fetching movies:", error);
      }
    };

    getAllMembers();
    getAllMovies();
  }, []);

  useEffect(() => {
    const whoWatched = (movieId) => {
      const movie = movies.find((movie) => movie._id === movieId);
      if (movie) {
        const watched = movie.watchMovies.map((watcher) => {
          const member = members.find((member) => member._id === watcher);
          return member
            ? { name: member.nameMember, id: member._id }
            : { name: "Unknown", id: null };
        });
        return watched;
      }
      return [];
    };

    if (movies.length > 0 && members.length > 0) {
      const watched = whoWatched(props);
      setWatchedMembers(watched);
    }
  }, [movies, members, props]);

  return (
    <div style={{ border: "2px solid Red" }}>
      <h3>Subscriptions Watched</h3>
      <p>Watched by:</p>
      <ul>
        {watchedMembers.map((member, index) => (
          <li key={index}>
            {member.id ? (
              <Link to={`http://localhost:5173/subscriptions/allmembers`}>
                {member.name}
              </Link>
            ) : (
              member.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionsWatched;
