const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const MemberSchema = new Schema({
	Name: {
		type: String,
		required: true,
	},
	Role: {
		type: String,
		required: true
	},
	Linkedin: {
		type: String,
		required: true
	},
	Github: {
		type: String,
		required: false
	},
	Stackoverflow: {
		type: String,
		required: false
	}
});

module.exports = Member = mongoose.model("member", MemberSchema);
