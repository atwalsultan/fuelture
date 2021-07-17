const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const MilestoneSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    cardDetailedText: {
        type: String,
        required: true,
    },
    media: {
        type: Object,
        required: true,
    }
})

module.exports = Milestone = mongoose.model('milestone', MilestoneSchema)
