require('dotenv').config()

// import express
const express = require('express')
const mongoose = require('mongoose') // object 'mongoose' to connect to db
const reviewRoutes = require('./routes/reviewRoutes') // module export of reviews.js
const restroomRoutes = require('./routes/restroomRoutes')
const reviewCountRoute = require('./routes/reviewCountRoute')
const restroomReviewCountRoute = require('./routes/restroomReviewCountRoute');

// express app
const app = express()

// middleware
app.use(express.json()) // Parses JSON data into JavaScript obj and assigns it to req.body

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`) // logs request path and method
    next() // passes control to next middleware or route handler
})

// route handler to handle requests
app.use('/api/reviews/', reviewRoutes) // combines base url with routes from reviewRoutes
app.use('/api/restrooms/', restroomRoutes)
app.use('/api/reviewCount/', reviewCountRoute)
app.use('/api/restroomReviewCount/', restroomReviewCountRoute);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to database, listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// run npm server.js
// run nodemon server.js to monitor changes in source code and auto restarts node application
