const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const IncentiveSchema = new Schema({
    Province: {
        type: String,
        required: true,
    },
    Condition: {
        type: String,
        required: true,
    },
    Max_Incentive: {
        type: Number,
        required: true,
    },
})

module.exports = Incentive = mongoose.model('incentive', IncentiveSchema)
