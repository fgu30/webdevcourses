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
  let query = `
    {
      movies {
        id,
        title,
        rating,
        genres
      }
    }
  `

  let result = await graphql(schema, query)
  res.json(result.data)
})

export default router