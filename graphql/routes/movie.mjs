import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/movie', async (req, res, next) => {
  let query = `
    {
      hello,
      movie {
        id,
        title
      }
    }
  `

  let result = await graphql(schema, query)
  res.json(result.data)
})

router.get('/movies', async (req, res, next) => {
  let { limit, start } = req.query

  let query = `
    query {
      movies {
        id,
        title,
        genres,
        rating,
        theater {
          id,
          name
        },
        comments {
          content
        }
      },
      juooo(limit: ${limit}, start: ${start}) {
        name
      }
    }
  `

  let result = await graphql(schema, query)
  res.json(result.data)
})

router.post('/movies', async (req, res, next) => {
  console.log(req.body)
  let {title, genres, rating, theater} = req.body
  let query = `
    mutation {
      insert(
        title: "${title}"
        genres: "${genres}",
        rating: ${rating},
        theater: ${theater}
      ) {
        ret,
        msg
      }
    }
  `

  let result = await graphql(schema, query)
  console.log(result)
  res.json(result.data)
})
export default router