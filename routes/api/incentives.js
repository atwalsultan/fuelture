const express = require("express");
const router = express.Router();

// Import model
const Incentive = require("../../models/Incentive");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Incentive.find()
		.then((incentive) => {
			res.status(200).send(incentive);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;
