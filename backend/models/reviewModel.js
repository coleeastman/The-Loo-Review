// mongoose allows models and schemas to be created (mongodb alone is schemaless)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// schema with structure for data in db
const reviewSchema = new Schema({
    restroom: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        required: true
    }
}, { timestamps: true })

// new model with name and schema created above
module.exports= mongoose.model('Review', reviewSchema)
