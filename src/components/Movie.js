import React from "react";

const Movie = (props) => {
  return (
    <div className="card">
      <div className="container">
        <h2>{props.movieName}</h2>
        <h4>
          {props.movieGenre} - {props.movieYear}
        </h4>
      </div>
    </div>
  );
};

export default Movie;
