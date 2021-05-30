'use strict'

import express from 'express'
import morgan from 'morgan'
import path from 'path'

import storeRoutes from './routes/storeRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import itemRoutes from './routes/itemRoutes.js'
import uploadRoute from './routes/uploadRoute.js'
import authUser from './utils/authUser.js'
import protect from './utils/authMiddleware.js'
const app = express()

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
const __dirname = path.resolve()

/*=================================================
APP SETTINGS
=================================================*/
// use morgan logger for dev env
if (env === 'development') {
  console.clear()
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

/*=================================================
USING ROUTES MIDDLEWARES
=================================================*/
app.get('/', protect, (req, res) => {
  res.send('API IS WORKING')
})
app.post('/api/user/login', authUser)
app.use('/api/stores', storeRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/item', itemRoutes)
app.use('/api/upload', uploadRoute)

/*=================================================
LISTEN FOR REQUESTS ON THE AVAILABLE PORT NUMBER
=================================================*/
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
