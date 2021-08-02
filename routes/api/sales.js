const express = require("express");
const router = express.Router();

// Import model
const Sale = require("../../models/Sale");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Sale.find()
		.sort({ REF_DATE: -1 })
		.then((figure) => {
			res.status(200).send(figure);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;
