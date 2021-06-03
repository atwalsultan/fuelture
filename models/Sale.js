const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const SaleSchema = new Schema({
    REF_DATE: {
        type: Number,
        required: true,
    },
    GEO: {
        type: String,
        required: true,
    },
    "Fuel type": {
        type: String,
        required: true,
    },
    "Vehicle type": {
        type: String,
        required: true,
    },
    VALUE: {
        type: Number,
        required: true,
    }
})

module.exports = Sale = mongoose.model('sale', SaleSchema)
