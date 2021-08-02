const express = require("express");
const router = express.Router();

// Import model
const Spec = require("../../models/Spec");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Spec.find()
		.then((spec) => {
			res.status(200).send(spec);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;
