const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const StationSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    properties: {
        type: Object,
        required: true,
    },
    geometry: {
        type: Object,
        required: true,
    },
    id: {
        type: String,
        required: true,
    }
})

module.exports = Station = mongoose.model('station', StationSchema)
