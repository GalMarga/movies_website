import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { getAll } from "../utils";

const MOVIES_URL = "http://localhost:3000/movies";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    filterMovies();
    console.log('searchName', searchName);
  }, [searchName, movies]);

  const getAllMovies = async () => {
    const { data } = await getAll(MOVIES_URL);
    setMovies(data);
    console.log(data);
  };

  const filterMovies = () => {
    const filtered = movies.filter(movie =>
      movie.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchName(value);
    localStorage.setItem('movie', value);
  };

  return (
    <>
    <br />
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchName}
        onChange={handleSearchChange}
      />
      {filteredMovies.map((dataMovies, index) => (
        <Movie data={dataMovies} key={index} />
      ))}
    </>
  );
};

export default AllMovies;
