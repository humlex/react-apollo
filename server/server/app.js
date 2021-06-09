const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("../schema/schema");

const app = express();
const PORT = 3000;

mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.h0sg0.mongodb.net/apolloDB?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is running on port ${PORT}!`);
});
