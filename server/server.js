'use strict'

import express from 'express'
import morgan from 'morgan'

const app = express()

// TODO: Connect to mysql database

/* 
  API ENDPOINTS

  Store =>
    GET  /api/store   => get all the sores
    POST /api/store   => create new store
    GET /api/store/:id => get a single store

  CATEGORY
    GET /api/cat    => get all categories
    POST /api/cat   => create new category
    GET /api/cat/:id => get a single cat

  ITEM
    GET /api/items  => get all items
    POST /api/items => create new item
    GET  /api/items/:id => get item by id
*/

/*=================================================
ENV VARIABLES
=================================================*/
const port = process.env.PORT || 5000
const env = process.env.NODE_ENV || 'development'

/*=================================================
APP SETTINGS
=================================================*/
// use morgan logger for dev env
if (env === 'development') {
  console.clear()
  app.use(morgan('dev'))
}

/*=================================================
USING ROUTES MIDDLEWARES
=================================================*/
app.get('/', (req, res) => {
  res.send('API IS WORKING')
})

/*=================================================
LISTEN FOR REQUESTS ON THE AVAILABLE PORT NUMBER
=================================================*/
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
