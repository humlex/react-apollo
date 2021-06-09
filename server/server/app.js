const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const PORT = 3000;

app.use("/graphql", graphqlHTTP({}));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is running on port ${PORT}!`);
});
