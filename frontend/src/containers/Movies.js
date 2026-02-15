import React from "react";
import Movie from "../components/Movie";

const movies = [
  { name: "John Wick", genre: "Action", year: "2019" },
  { name: "John Wick", genre: "Action", year: "2019" },
  { name: "John Wick", genre: "Action", year: "2019" },
  { name: "John Wick", genre: "Action", year: "2019" },
  { name: "John Wick", genre: "Action", year: "2019" },
  { name: "John Wick", genre: "Action", year: "2019" },
  { name: "John Wick", genre: "Action", year: "2019" },
];

const Movies = () => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return (
          <Movie
            movieName={movie.name}
            movieGenre={movie.genre}
            movieYear={movie.year}
          />
        );
      })}
    </div>
  );
};

export default Movies;
