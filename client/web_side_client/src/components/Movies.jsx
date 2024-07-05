import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();

  const [nameMovie, setNameMovie] = useState("");

  useEffect(() => {
    navigate("allmovies");

    localStorage.setItem("nameMovie", JSON.stringify(nameMovie));
  }, [nameMovie]);

  return (
    <div
      style={{ textAlign: "center", margin: "10px", border: "2px Solid Black" }}
    >
      <div>Movies</div>

      <button onClick={() => navigate("allmovies")}>All Movies</button>

      <button onClick={() => navigate("addmovie")}>Add Movie</button>

      <Outlet />
    </div>
  );
};

export default Movies;
