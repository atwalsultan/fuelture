const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const PriceSchema = new Schema({
	City: {
		type: String,
		required: true,
	},
	Province: {
		type: String,
		required: true,
	},
	"Type of fuel": {
		type: String,
		required: true,
	},
	VALUE: {
		type: Number,
		required: true,
	},
});

module.exports = Price = mongoose.model("price", PriceSchema);
