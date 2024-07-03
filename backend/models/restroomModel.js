// mongoose allows models and schemas to be created (mongodb alone is schemaless)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// schema with structure for data in db
const restroomSchema = new Schema({
    restroom: {
        type: String,
        required: true
    },
    avg_stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
})

// new model with name and schema created above
module.exports= mongoose.model('Restroom', restroomSchema)
