import React, { useState } from "react";
import AddNewMovieSubscri from "./AddNewMovieSubscri";

const MovieWatched = () => {
  const [toggleShow, setToggleShow] = useState(false);

  const handleSubscribe = () => {
    setToggleShow((showSubscribe) => !showSubscribe);
  };

  return (
    <>
      <div style={{ border: "2px solid Red", padding: "10px" }}>
        Movie Watched <br />
        <br />
        <button onClick={handleSubscribe}> Subscribe To New Movie</button>
        {toggleShow && <AddNewMovieSubscri />}
      </div>{" "}
    </>
  );
};

export default MovieWatched;
