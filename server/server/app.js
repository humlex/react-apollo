const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("../schema/schema");

const cors = require("cors");

const app = express();
const PORT = 3005;

mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.h0sg0.mongodb.net/apolloDB?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(cors());

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
