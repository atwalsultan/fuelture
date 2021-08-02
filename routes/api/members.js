const express = require("express");
const router = express.Router();

// Import model
const Member = require("../../models/Member");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Member.find()
		.then((member) => {
			res.status(200).send(member);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;
