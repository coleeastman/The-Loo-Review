require('dotenv').config()

// import express
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') // object 'mongoose' to connect to db
const reviewRoutes = require('./routes/reviewRoutes') // module export of reviews.js
const restroomRoutes = require('./routes/restroomRoutes')
const reviewCountRoute = require('./routes/reviewCountRoute')
const restroomReviewCountRoute = require('./routes/restroomReviewCountRoute');

// express app
const app = express()

// middleware
app.use(express.json()) // Parses JSON data into JavaScript obj and assigns it to req.body

// cors middleware 
const allowedOrigin = 'https://the-loo-review-site.onrender.com';

// Set up CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // check if the incoming request's origin matches the allowed origin
    if (origin === allowedOrigin || !origin) {
      callback(null, true); // allow request
    } else {
      callback(new Error('Not allowed by CORS')); // block request
    }
  },
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`) // logs request path and method
    next() // passes control to next middleware or route handler
})

// root route
app.get('/', (req, res) => {
    res.send('Backend is up and running!');
});

// route handler to handle requests
app.use('/api/reviews/', reviewRoutes) // combines base url with routes from reviewRoutes
app.use('/api/restrooms/', restroomRoutes)
app.use('/api/reviewCount/', reviewCountRoute)
app.use('/api/restroomReviewCount/', restroomReviewCountRoute);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests on all network interfaces
        app.listen(process.env.PORT || 4000, '0.0.0.0', () => {
            console.log('connected to database, listening on port', process.env.PORT || 4000)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// run npm server.js
// run nodemon server.js to monitor changes in source code and auto restarts node application
