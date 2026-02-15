import React from "react";
import Movie from "../components/Movie";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const listAllMovies = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`;

const Movies = () => {
  const { loading, error, data } = useQuery(listAllMovies);

  if (loading) return <p className="loading">Loading Movies...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="movies">
      {data.listMovies.map((movie) => {
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
