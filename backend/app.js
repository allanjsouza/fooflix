require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const movieResolvers = require("./resolvers/resolvers");
const movieSchema = require("./schema/schema");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}!`);
});
