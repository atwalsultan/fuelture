const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const SpecSchema = new Schema({
    Brand: {
        type: String,
        required: true,
    },
    Model: {
        type: String,
        required: true,
    },
    Accel: {
        type: String,
        required: true,
    },
    TopSpeed: {
        type: String,
        required: true,
    },
    Range: {
        type: String,
        required: true,
    },
    Efficiency: {
        type: String,
        required: true,
    },
    RapidCharge: {
        type: String,
        required: true,
    },
    PowerTrain: {
        type: String,
        required: true,
    },
    PlugType: {
        type: String,
        required: true,
    },
    BodyStyle: {
        type: String,
        required: true,
    },
    Segment: {
        type: String,
        required: true,
    },
    Seats: {
        type: Number,
        required: true,
    },
    PriceEuro: {
        type: Number,
        required: true,
    },
})

module.exports = Spec = mongoose.model('spec', SpecSchema)
