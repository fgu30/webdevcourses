import axios from 'axios'

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList
} from 'graphql'

const MovieType = new GraphQLObjectType({
  name: 'movieType',
  fields: {
    id: {
      type: GraphQLInt
    },
    title: {
      type: GraphQLString
    },
    genres: {
      type: GraphQLString
    },
    rating: {
      type: GraphQLFloat
    },
    theater: {
      type: GraphQLInt
    }
  }
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world'
        }
      },
      movie: {
        type: MovieType,
        async resolve() {
          let result = await axios.get('http://localhost:9000/subjects/1')
          return result.data
        }
      },
      movies: {
        type: new GraphQLList(MovieType),
        async resolve() {
          let result = await axios.get('http://localhost:9000/subjects')
          return result.data
        }
      }
    }
  })
})

// module.exports = schema
export default schema