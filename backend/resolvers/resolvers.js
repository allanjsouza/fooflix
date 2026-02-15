const movies = [
  { name: "John Wick", genre: "Action", year: "2019" },
  { name: "John Wick", genre: "Action", year: "2019" },
  { name: "John Wick", genre: "Action", year: "2019" },
];

const resolvers = {
  listMovies: () => {
    return movies;
  },
  addMovie: (args) => {
    return {
      name: args.name,
      genre: args.genre,
      year: args.year,
    };
  },
};

module.exports = resolvers;
