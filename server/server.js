'use strict'

import express from 'express'
import morgan from 'morgan'

const app = express()

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
