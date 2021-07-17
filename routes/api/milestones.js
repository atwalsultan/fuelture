const express = require("express");
const router = express.Router();

const Milestone = require("../../models/Milestone");

router.get("/", (req, res) => {
	Milestone.find()
		.then((milestone) => {
			res.status(200).send(milestone);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;
