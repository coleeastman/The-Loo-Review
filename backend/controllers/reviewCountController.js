const Review = require('../models/reviewModel')
const mongoose = require('mongoose')

// get review count
const getReviewCount = async (req, res) => {
    try {
      const reviewCount = await Review.countDocuments();
      res.status(200).json({ reviewCount });
    } catch (error) {
      console.log("Error: ", error);
      res.status(500).json({ message: error.message });
    }
};


module.exports = {
  getReviewCount
}