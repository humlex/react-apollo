const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  movie: {
    type: MovieType,
    args: { id: { type: GraphQLString } },
    resolve(parent, args) {},
  },
});
