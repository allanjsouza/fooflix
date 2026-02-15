const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const movieResolvers = require("./resolvers/resolvers");
const movieSchema = require("./schema/schema");

mongoose
  .connect(
    "mongodb+srv://allanjsouza_db_user:rihNybD0301yeoZj@fooflix.zya9p3g.mongodb.net/?appName=fooflix",
  )
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: movieSchema,
    rootValue: movieResolvers,
    graphiql: true,
  }),
);

app.get("/hi", (req, res) => {
  res.send("Hello from the express server!");
});

app.listen("4000", () => {
  console.log("Server on port 4000!");
});
