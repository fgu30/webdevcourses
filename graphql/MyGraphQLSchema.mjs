import axios from 'axios'

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql'

const FeedbackType = new GraphQLObjectType({
  name: 'feedbackType',
  fields: {
    ret: {
      type: GraphQLBoolean,
    },
    msg: {
      type: GraphQLString
    }
  }
})

const JuoooType = new GraphQLObjectType({
    name: 'juoooType',
    fields: {
      schedular_id: {
        type: GraphQLInt
      },
      venue_name: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      pic: {
        type: GraphQLString
      },
      min_price: {
        type: GraphQLString
      },
      max_price: {
        type: GraphQLString
      }
    }
})

const CommentType = new GraphQLObjectType({
  name: 'commentType',
  fields: {
    id: {
      type: GraphQLInt
    },
    subject: {
      type: GraphQLInt
    },
    theaters: {
      type: GraphQLInt
    },
    content: {
      type:  GraphQLString
    }
  }
})

const TheaterType = new GraphQLObjectType({
  name: 'theaterType',
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  }
})

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
      type: TheaterType,
      async resolve(obj, args, context) {
        let id = obj.theater || 1
        let result = await axios.get(`http://localhost:9000/theaters/${id}`)
        return result.data
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      async resolve(obj) {
        let { theater, id } = obj
        let result = await axios.get(`http://localhost:9000/comments?theaters=${theater}&subject=${id}`)
        return result.data
      }
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
      },

      juooo: {
        type: new GraphQLList(JuoooType),
        args: {
          limit: {
            type: GraphQLInt
          },
          start: {
            type: GraphQLInt
          }
        },
        async resolve(obj, args) {
          let { start, limit } = args
          let result = await axios.get('https://api.juooo.com/Show/Search/getShowList?city_id=0&category=86&keywords=&venue_id=&start_time=&page=1&referer_type=&time=1604663161347&version=6.1.13&referer=2&sign=f0a8e63ba2eba934a42a60f28d11fa7e')
          let list = result.data.data.list
          return list.splice(start, limit)
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      insert: {
        type: FeedbackType,
        args: {
          title: {
            type: new GraphQLNonNull(GraphQLString)
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
        },
        async resolve(obj, args) {
          console.log(args)
          await axios.post(`http://localhost:9000/subjects`, {...args})
          return {
            ret: true,
            msg: '插入成功'
          }
        }
      }
    }
  })
})

// module.exports = schema
export default schema