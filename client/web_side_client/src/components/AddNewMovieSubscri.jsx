import React, { useState, useEffect } from "react";
import { addItem, getAll, updateItemWatchMovies } from "../utils"; // Assuming you have an updateItem function in utils

const AddNewMovieSubscri = () => {
  const MOVIES_URL = "http://localhost:3000/movies";
  
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [memberId, setMemberId] = useState("");

  useEffect(() => {
    const fetchMemberId = () => {
      const id = localStorage.getItem("idMember");
      setMemberId(id);
      console.log("Fetched memberId:", id);
    };

    const getAllMovies = async () => {
      try {
        const { data } = await getAll(MOVIES_URL);
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMemberId();
    getAllMovies();
  }, []);

  const addSubsc = async () => {
    if (!selectedMovieId || !selectedDate || !memberId) {
      console.error("All fields are required");
      return;
    }

    const SUBSCRIPTONS_URL = `http://localhost:3000/subscriptions/${memberId}`;
    const setSubsc = {
      movieid: selectedMovieId,
      date: selectedDate,
    };

    try {
      const { data } = await addItem(SUBSCRIPTONS_URL, setSubsc);
      console.log(data);

      // Update the movie to add the memberId to the watchMovies field
      const movieToUpdate = movies.find(movie => movie._id === selectedMovieId);
      if (movieToUpdate) {
        const updatedWatchMovies = [...(movieToUpdate.watchMovies || []), memberId];
        await updateItemWatchMovies(`${MOVIES_URL}/${selectedMovieId}`, { watchMovies: updatedWatchMovies });
        console.log(updatedWatchMovies);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ border: "2px solid Red", padding: "10px", width: "500px" }}>
      Add A New Movie <br /> <br />
      <select
        onChange={(e) => {
          setSelectedMovieId(e.target.value);
        }}
      >
        <option value="">Select a movie</option>
        {movies.map((movie) => (
          <option key={movie._id} value={movie._id} >
            {movie.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="date"
        onChange={(e) => {
          setSelectedDate(e.target.value);
        }}
      />
      <br />
      <button onClick={addSubsc}> Subscribe </button>
    </div>
  );
};

export default AddNewMovieSubscri;
