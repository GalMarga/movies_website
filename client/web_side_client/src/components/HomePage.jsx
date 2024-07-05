import React from "react";
import NavBar from "./NavBar.jsx";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ margin: "10px" }}>
        <NavBar></NavBar>
        <h1 style={{ textAlign: "center" }}>The Largest Library Of Movies</h1>
      </div>
    </div>
  );
};

export default HomePage;
