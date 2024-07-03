// file to register routes

const express = require('express')
const { 
    getReviews,
    getReview,
    createReview, 
    deleteReview,
    updateReview,
    getReviewsByRestroom
} = require('../controllers/reviewController')

const router = express.Router()

// GET all reviews
router.get('/', getReviews)

// GET all reviews from single restroom
router.get('/restroom/:restroom', getReviewsByRestroom);

// GET a single review
router.get('/:id/', getReview)

// POST a review
router.post('/', createReview)

// DELETE a review
router.delete('/:id', deleteReview)

// UPDATE a review
router.patch('/:id', updateReview)

module.exports = router