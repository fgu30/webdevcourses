import express from 'express'
// import { graphqlHTTP } from 'express-graphql'
// import schema from './MyGraphQLSchema.mjs'

import movieRouter from './routes/movie.mjs'

const app = express()

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   }),
// )

app.use('/api', movieRouter)

app.listen(4400)